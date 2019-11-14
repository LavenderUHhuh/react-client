import React, { Component } from 'react';
import { Card, Button, Table, Radio, Modal } from 'antd';

import AddRoleForm from './add-role-form';
import UpdateRoleForm from './update-role-form';
//引高阶组件
import { connect } from 'react-redux'
//引入action-creators.js
import { getRoles, addRole, updateRole, deleteRole } from '../../redux/ation-creators'
//格式化时间
import dayjs from 'dayjs'
//消息订阅
import PubSub from 'pubsub-js'
// 单选
const RadioGroup = Radio.Group;

@connect((state) => ({ roles: state.roles, username: state.user.user.username }), { getRoles, addRole, updateRole, deleteRole })
class Role extends Component {
  //界面渲染完毕
  componentDidMount() {
    this.props.getRoles()
    //订阅消息
    this.pubToken = PubSub.subscribe('getCheckedKeys', (msg, data) => {
      //保存当前传过来的选中所有的菜单的路径
      this.checkedKeys = data
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.pubToken);
  }
  state = {
    value: '',  //单选的默认值，也就是选中的某个角色的id值
    // roles: [], //权限数组
    isShowAddRoleModal: false, //是否展示创建角色的标识
    isShowUpdateRoleModal: false, //是否展示设置角色的标识
    isDisabled: true  //默认禁用角色权限是否显示
  };

  // addRoleFormRef =this.addRoleForm 
  // updateRoleFormRef =this.updateRoleForm 

  columns = [{
    dataIndex: '_id',
    render: id => <Radio value={id} />
  }, {
    title: '角色名称',
    dataIndex: 'name',
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    //获取时间
    render: (time) => {
      return time && dayjs(time).format('YYYY-MM-DD HH:mm:ss')
    }
  }, {
    title: '授权时间',
    dataIndex: 'authTime',
    render: (time) => {
      return time && dayjs(time).format('YYYY-MM-DD HH:mm:ss')
    }
  }, {
    title: '授权人',
    dataIndex: 'authName',
  }, {
    title: '操作',
    // dataIndex: 'todo',
    render: (role) => {
      return (
        <div>
          {/* <Button type="link" onClick={()=>{this.updateRole(role)}}>修改</Button>
          &nbsp; 
          disabled 禁用
          */}
          <Button type="link" onClick={() => { this.delRole(role._id) }}>删除</Button>
        </div>
      )
    }
  }

  ];
  //删除操作
  delRole = (roleId) => {
    //弹框，提示，是否确认删除
    Modal.confirm({
      title: '确认删除吗',
      okText: '确认',
      cancelText: '取消',
      //箭头函数
      onOk: () => {
        //调用删除的接口
        this.props.deleteRole(roleId)
      }
    })
  }

  onRadioChange = (e) => {
    //此时e.target.value--当前选中的这一行数据的id值

    ///e.target.value--当前
    this.setState({
      value: e.target.value,
      isDisabled: false
    });
  };

  switchModal = (key, value) => {
    return () => {
      this.setState({ [key]: value })
    }
  };

  //创建角色的回调函数
  addRole = () => {
    //添加角色的回调函数，调用异步action函数
    //validateFields校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件
    this.addRoleFormRef.validateFields((err, values) => {
      if (!err) {
        const { name } = values
        this.props.addRole(name)
        //关闭当前的对话框
        this.setState({
          isShowAddRoleModal: false
        })
      }
    })

  };
  //设置角色权限的回调函数
  updateRole = () => {
    //需要使用keys
    const roleId = this.state.value //角色的ID
    const authName = this.props.username //当前的授权人，登录的人
    const menus = this.checkedKeys //选中的菜单路径
    this.props.updateRole(roleId, authName, menus)
    //关闭窗口
    this.setState({
      isShowUpdateRoleModal: false
    })
  };

  render() {
    const { value, isDisabled, isShowAddRoleModal, isShowUpdateRoleModal } = this.state;
    const { roles } = this.props
    //获取当前选中的这个单选框对应的这一行数据（role对象），根据id进行查找
    const role = roles.find(role => role._id === value)
    return (
      <Card
        title={
          <div>
            <Button type='primary' onClick={this.switchModal('isShowAddRoleModal', true)}>创建角色</Button> &nbsp;&nbsp;
            <Button type='primary' disabled={isDisabled} onClick={this.switchModal('isShowUpdateRoleModal', true)}>设置角色权限</Button>
          </div>
        }
      >
        <RadioGroup onChange={this.onRadioChange} value={value} style={{ width: '100%' }}>
          <Table
            columns={this.columns}
            dataSource={roles}
            bordered
            rowKey='_id'
            pagination={{
              defaultPageSize: 5,
              showSizeChanger: true,
              pageSizeOptions: ['5', '10', '15', '20'],
              showQuickJumper: true,
            }}
          />
        </RadioGroup>

        <Modal
          title="创建角色"
          visible={isShowAddRoleModal}
          onOk={this.addRole}
          onCancel={this.switchModal('isShowAddRoleModal', false)}
          okText='确认'
          cancelText='取消'
        >
          <AddRoleForm setAddRoleForm={form => this.addRoleFormRef = form} />
        </Modal>

        <Modal
          title="设置角色权限"
          visible={isShowUpdateRoleModal}
          onOk={this.updateRole}
          onCancel={this.switchModal('isShowUpdateRoleModal', false)}
          okText='确认'
          cancelText='取消'
        >
          <UpdateRoleForm setUpdateForm={form => this.updateRoleFormRef = form} role={role} />
        </Modal>

      </Card>
    )
  }
}

export default Role;
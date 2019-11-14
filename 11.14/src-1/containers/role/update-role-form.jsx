import React, { Component } from 'react';
import { Form, Input, Tree } from 'antd';
import PropTypes from 'prop-types'

//引入menus
import menus from '../../config/menus'
//引入i18next
import { withTranslation } from 'react-i18next'
import PubSub from 'pubsub-js'
const Item = Form.Item;
const { TreeNode } = Tree;

@withTranslation()
@Form.create()
class UpdateRoleForm extends Component {
  //设置role的类型及是否是必须的
  static propTypes = {
    role: PropTypes.object.isRequired
  }
  //通过一个方法，设置节点树中的显示的数据
  getTreeNodes = () => {
    const treeData = menus.map(menu => {
      if (menu.children) {
        return {
          title: menu.title,
          key: menu.key,
          children: menu.children.map(cMenu => {
            return {
              title: cMenu.title,
              key: cMenu.key,
            }
          })
        }
      } else {
        return {
          title: menu.title,
          key: menu.key,
        }
      }
    })
    return [
      {
        title: '平台权限',
        key: '/power',
        children: treeData
      }
    ]
  }



  //构造器
  constructor(props) {
    super(props)
    //把当前组件中的form对象传入父级组件中
    this.props.setUpdateForm(this.props.form)
  }
  //设置父组件传入的数据的类型是否是必须的
  static propTypes = {
    setUpdateForm: PropTypes.func.isRequired
  }
  //默认的状态数据
  state = {
    //默认是空的---将来存储的是多个字符串类型的路径-key
    checkedKeys: [],

  };

  onCheck = (checkedKeys) => {
    //更新状态数据
    this.setState({ checkedKeys }, () => {
      //缓存
      PubSub.publish('getCheckedKeys', checkedKeys);
      //可以清空state中的checjedKeys的数据
      this.state.checkedKeys = []
    })
  }


  renderTreeNodes = data => data.map((item) => {
    const { t } = this.props
    if (item.children) {
      return (
        <TreeNode title={t(item.title)} key={item.key} dataRef={item}>
          {
            this.renderTreeNodes(item.children)
          }
        </TreeNode>
      );
    }
    return <TreeNode title={t(item.title)} key={item.key} />;
  });

  render() {
    
    const { getFieldDecorator } = this.props.form;
    //this.props.setUpdateForm(this.props.form)

    const { name, menus } = this.props.role

    const { checkedKeys } = this.state
    return (
      <Form>
        <Item label='角色名称'>
          {
            getFieldDecorator(
              'name',
              {
                initialValue: name 
              }
            )(
              <Input placeholder='请输入角色名称' disabled />
            )
          }
        </Item>
        <Item>
          <Tree
            checkable
            /* onExpand={this.onExpand}
            expandedKeys={this.state.expandedKeys}
            autoExpandParent={this.state.autoExpandParent}
            onCheck={this.onCheck}
            checkedKeys={this.state.checkedKeys}
            onSelect={this.onSelect}
            selectedKeys={this.state.selectedKeys} */

            defaultExpandAll //默认展开所有树节点
            checkedKeys={checkedKeys.length ? checkedKeys : menus}  //国际化
            onCheck={this.onCheck}
          >
            {this.renderTreeNodes(this.getTreeNodes())}
          </Tree>
        </Item>
      </Form>
    )
  }
}

export default UpdateRoleForm;
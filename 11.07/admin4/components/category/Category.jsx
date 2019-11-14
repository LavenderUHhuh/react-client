import React, { Component } from 'react'
//引入组件
import { Card, Table, Button, Icon } from 'antd';
//引入样式
import './Category.less'

class Category extends Component {
  render() {
    const columns = [
      {
        title: '品类名称',
        dataIndex: 'name',
        /*  render: text => <a>{text}</a>, */
      },
      {
        title: '操作',
        dataIndex: 'content',
        render: text => {
          return (
            <div>
              <Button type="link">修改分类</Button>
              <Button type="link">删除分类</Button>
            </div>
          )
        }
      },

    ];

    const data = [
      {
        key: '1',
        name: '家具生活1',
      },
      {
        key: '2',
        name: '家具生活2',
      }
    ];


    return (

      <Card title="分类列表" extra={<Button type="primary"><Icon type="plus" />分类列表</Button>}>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={{   //分页
            showQuickJumper: true,//是否可以快速跳转至某页
            showSizeChanger: true,//是否可以改变 页数
            pageSizeOptions: [  //指定每页可以显示多少条
                '2',
                '3',
                '6'
            ]
          }}
        />,
      </Card>

    )
  }
}
export default Category
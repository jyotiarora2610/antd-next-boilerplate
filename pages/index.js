import React from 'react'
import Layout from '../index.js'
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd'
import CharacterInfo from '../components/CharacterInfo'
import withRedux from 'next-redux-wrapper'
import initStore from '../redux'
import { rootEpic } from '../redux/epics'
import * as actions from '../redux/actions'
import { of } from 'rxjs/observable/of'

const FormItem = Form.Item
const Option = Select.Option

class TestPage extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    const resultAction = await rootEpic(
      of(actions.fetchCharacter(isServer)),
      store
    ).toPromise() // we need to convert Observable to Promise
    store.dispatch(resultAction)

    return { isServer }
  }

  componentDidMount () {
    this.props.startFetchingCharacters()
  }

  componentWillUnmount () {
    this.props.stopFetchingCharacters()
  }

  render () {
    return (
      <Layout>
        <div style={{ marginTop: 100 }}>
          <CharacterInfo />
          <Form layout='horizontal'>
            <FormItem
              label='Input Number'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <InputNumber size='large' min={1} max={10} style={{ width: 100 }} defaultValue={3} name='inputNumber' />
              <a href='#'>Link</a>
            </FormItem>

            <FormItem
              label='Switch'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Switch defaultChecked name='switch' />
            </FormItem>

            <FormItem
              label='Slider'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Slider defaultValue={70} />
            </FormItem>

            <FormItem
              label='Select'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Select size='large' defaultValue='lucy' style={{ width: 192 }} name='select'>
                <Option value='jack'>jack</Option>
                <Option value='lucy'>lucy</Option>
                <Option value='disabled' disabled>disabled</Option>
                <Option value='yiminghe'>yiminghe</Option>
              </Select>
            </FormItem>

            <FormItem
              label='DatePicker'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <DatePicker name='startDate' />
            </FormItem>
            <FormItem
              style={{ marginTop: 48 }}
              wrapperCol={{ span: 8, offset: 8 }}
            >
              <Button size='large' type='primary' htmlType='submit'>
              OK
              </Button>
              <Button size='large' style={{ marginLeft: 8 }}>
              Cancel
              </Button>
            </FormItem>
          </Form>
        </div>
      </Layout>
    )
  }
}

export default withRedux(
  initStore,
  null,
  {
    startFetchingCharacters: actions.startFetchingCharacters,
    stopFetchingCharacters: actions.stopFetchingCharacters
  }
)(TestPage)

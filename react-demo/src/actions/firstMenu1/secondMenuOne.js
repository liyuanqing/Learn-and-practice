'use strict';

import {Ajax, NameSpace} from '../util/index';

let ns = NameSpace('secondMenuOne');
import Mock from'mockjs';
var data = Mock.mock('http://g.cn',{

		"status": "000000",
		"message": "success",
		"total":"23",
		"data": [
			{
				"key": "1",
				"cityId": "12312",
				"cityName":"杭州市",
				"cityOpenedDate":"2016-12-12",
				"featureList":"学区房、满五唯一",
				"counter": "121",
				"createTime": "2016-01-01",
				"subway": "一号线",
				"plate":"西湖区、余杭区、临平"
			}]
})
// 输出结果
// console.log(JSON.stringify(data, null, 4))
export const GET_secondMenuOneLIST_REQUEST = ns('GET_secondMenuOneLIST_REQUEST');
export const GET_secondMenuOneLIST_SUCCESS = ns('GET_secondMenuOneLIST_SUCCESS');
export const GET_secondMenuOneLIST_FAILED = ns('GET_secondMenuOneLIST_FAILED');

export function getsecondMenuOneList(){

	return (dispatch) => {

        dispatch({
            type : GET_secondMenuOneLIST_REQUEST,
            data : ""
        });

        Ajax({
            url: 'http://g.cn',
						method: 'get',
            data: {}
        },json => {
console.log(json);
            dispatch({
                type : GET_secondMenuOneLIST_SUCCESS,
                data : json.data
            });

        },json => {
            dispatch({
                type : GET_secondMenuOneLIST_FAILED,
                data : json
            });

        });

	}
}

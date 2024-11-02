import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
// import TableOne from '../components/Tables/TableOne';
import TablePersonal from '../components/Tables/TablePersonal';
// import TableTwo from '../components/Tables/TableTwo';
import CardDataStats from '../components/CardDataStats';
import ChartPersonal from '../components/Charts/ChartPersonal';
import { userInfoGraph, userInfo } from '../service/api'
import { useEffect, useState } from 'react';
import TablePoolAward from '../components/Tables/TablePoolAward';
import { poolAward } from '../service/api'
import TableUser from '../components/Tables/TableUser'


const Personal = () => {
    let [packageData, setPackageData] = useState<[]>([]);

    useEffect(() => {
        getPersonalInfo()
        getPoolAward()
    }, [])
    let getPoolAward = async () => {
        let result = await poolAward({ perPage: 10000 })
        setPackageData(result.data.daily_cashbacks)
        console.log(result)
    }
    // let orderCashbackLimit = useState('') //个人回赠上限
    // let orderCashbackRemain = useState('') //剩余回赠
    let [categories, setCategories] = useState([
        'Sep',
        'Oct',
        'Mar',
        'Dec',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
    ])
    let [userInfoData, setUserinfoData] = useState({})
    let [userInfoGraphData, setUserInfoGraphData] = useState({})
    let [series, setSeries] = useState([
        {
            name: '每日奖励',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
        },

        {
            name: '推荐用户奖励',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
        },
        {
            name: '推荐商品奖励',
            data: [45, 35, 64, 52, 30, 25, 59, 36, 39, 36, 30, 51],
        },])
    let getPersonalInfo = async () => {
        try {
            let userInfoRes = await userInfo()
            let userInfoGraphRes = await userInfoGraph()
            setUserinfoData(userInfoRes.data);
            setUserInfoGraphData(userInfoGraphRes.data);
            console.log('userInfoRes', userInfoRes.data)
            console.log('userInfoGraphRes', userInfoGraphRes)
            let seriesArr: any[] = [];
            let categoriesArr: any[] = [];
            let dataArrOne: any[] = [];
            let dataArrTwo: any[] = [];
            let dataArrThree: any[] = [];


            userInfoGraphRes.data['graph_data'].map((item: any, index: any) => {
                categoriesArr.push(item.month)
                dataArrOne.push(item['1'])
                dataArrTwo.push(item['2'])
                dataArrThree.push(item['3'])
            })
            userInfoGraphRes.data['cashback_types'].map((item: any, index: any) => {
                let obj: { name?: string } = {};
                obj['name'] = item.name;

                seriesArr.push(obj)
            })
            seriesArr[0]['data'] = dataArrOne
            seriesArr[1]['data'] = dataArrTwo
            seriesArr[2]['data'] = dataArrThree
            // console.log(userInfoGraphData.cashback_types)
            // console.log(seriesArr)
            setSeries(seriesArr)
            setCategories(categoriesArr)
            console.log(series)
            console.log(categories)

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <Breadcrumb pageName="已绑定账户" />
            <div className="flex flex-col gap-10 mb-20">
                {/* <TableOne />
                <TableTwo /> */}
                <TableUser packageData={packageData} />
            </div>
        </>
    )
}

export default Personal

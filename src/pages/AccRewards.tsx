import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TablePoolAward from '../components/Tables/TablePoolAward';
import { poolAward } from '../service/api'
import TableDirect from '../components/Tables/TableDirect'
import TableProductReward from '../components/Tables/TableProductReward'
const PoolAward = () => {
    let [packageData, setPackageData] = useState<[]>([]);
    useEffect(() => {
        getPoolAward()
    }, [])
    let getPoolAward = async () => {
        let result = await poolAward({ perPage: 10000 })
        setPackageData(result.data.daily_cashbacks)
        console.log(result)
    }
    return (
        <>
            <Breadcrumb pageName="加速奖励商品列表" />


            <div className="flex flex-col gap-10 mb-20">
                {/* <TableOne />
                <TableTwo /> */}
                <TableDirect packageData={packageData} />
            </div>
            {/* <Breadcrumb pageName="4%：商品奖励" />


            <div className="flex flex-col gap-10">
                <TableProductReward packageData={packageData} />
            </div> */}
        </>
    );
};

export default PoolAward;

import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TablePoolAward from '../components/Tables/TablePoolAward';
import { poolAward } from '../service/api'

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
            <Breadcrumb pageName="奖池奖励 " />


            <div className="flex flex-col gap-10">
                {/* <TableOne />
                <TableTwo /> */}
                <TablePoolAward packageData={packageData} />
            </div>
        </>
    );
};

export default PoolAward;

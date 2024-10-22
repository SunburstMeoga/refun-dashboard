import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TablePoolAward from '../components/Tables/TablePoolAward';

const PoolAward = () => {
    return (
        <>
            <Breadcrumb pageName="奖池奖励 " />


            <div className="flex flex-col gap-10">
                {/* <TableOne />
                <TableTwo /> */}
                <TablePoolAward />
            </div>
        </>
    );
};

export default PoolAward;

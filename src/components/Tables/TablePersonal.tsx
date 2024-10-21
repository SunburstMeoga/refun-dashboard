import { Package } from '../../types/package';

const packageData: Package[] = [
    {
        name: 'Free package',
        price: 0.0,
        invoiceDate: `Jan 13,2023`,
        status: 'Paid',
    },
    {
        name: 'Standard Package',
        price: 59.0,
        invoiceDate: `Jan 13,2023`,
        status: 'Paid',
    },
    {
        name: 'Business Package',
        price: 99.0,
        invoiceDate: `2023-10-02`,
        status: 'Paid',
    },
    {
        name: 'Standard Package',
        price: 59.0,
        invoiceDate: `Jan 13,2023`,
        status: 'Pending',
    },
];

const TableThree = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[140px] py-4 px-4 font-medium text-black dark:text-white ">
                                订单编号
                            </th>
                            <th className="min-w-[140px] py-4 px-4 font-medium text-black dark:text-white">
                                商品名称
                            </th>
                            <th className="min-w-[140px] py-4 px-4 font-medium text-black dark:text-white">
                                订单完成时间
                            </th>
                            <th className="min-w-[140px] py-4 px-4 font-medium text-black dark:text-white">
                                订单金额
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {packageData.map((packageItem, key) => (
                            <tr key={key}>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark ">
                                    <p className="text-black dark:text-white">
                                        23423...23423
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {packageItem.name}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        2023-04-23 23:23:01
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <h5 className="font-medium text-black dark:text-white">
                                        ￥ 23.09
                                    </h5>
                                    <p className="text-sm"> ≈ 22.94 HAH</p>
                                    <p className="text-sm"> ≈ 21.62 USDT</p>
                                </td>
                                {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark ">
                                    <p className="text-black dark:text-white">
                                        23423...23423
                                    </p>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableThree;

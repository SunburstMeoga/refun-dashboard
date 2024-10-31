import { Product } from '../../types/product';
import ProductOne from '../../images/product/product-01.png';
import ProductTwo from '../../images/product/product-02.png';
import ProductThree from '../../images/product/product-03.png';
import ProductFour from '../../images/product/product-04.png';

// const productData: Product[] = [
//     {
//         image: ProductOne,
//         name: 'Apple Watch Series 7',
//         category: 'Electronics',
//         price: 296,
//         sold: 22,
//         profit: 45,
//     },
//     {
//         image: ProductTwo,
//         name: 'Macbook Pro M1',
//         category: 'Electronics',
//         price: 546,
//         sold: 12,
//         profit: 125,
//     },
//     {
//         image: ProductThree,
//         name: 'Dell Inspiron 15',
//         category: 'Electronics',
//         price: 443,
//         sold: 64,
//         profit: 247,
//     },
//     {
//         image: ProductFour,
//         name: 'HP Probook 450',
//         category: 'Electronics',
//         price: 499,
//         sold: 72,
//         profit: 103,
//     },
// ];
interface TableDirectPushProps {
    packageData: [];  // 使用 props 接收 packageData
}

const TablePoolAward: React.FC<TableDirectPushProps> = ({ packageData }) => {
    return (
        // <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        //     <div className="py-6 px-4 md:px-6 xl:px-7.5">
        //         <h4 className="text-xl font-semibold text-black dark:text-white">
        //             奖池奖励商品列表
        //         </h4>
        //     </div>

        //     <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        //         <div className="col-span-3 flex items-center">
        //             <p className="font-medium">商品名称</p>
        //         </div>
        //         <div className="col-span-2 hidden items-center sm:flex">
        //             <p className="font-medium">商品金额</p>
        //         </div>
        //         <div className="col-span-1 flex items-center">
        //             <p className="font-medium">订单完成时间</p>
        //         </div>
        //         <div className="col-span-1 flex items-center">
        //             <p className="font-medium">购买账户</p>
        //         </div>
        //         <div className="col-span-1 flex items-center">
        //             <p className="font-medium">订单编号</p>
        //         </div>
        //         <div className="col-span-1 flex items-center">
        //             <p className="font-medium">总奖励</p>
        //         </div>
        //         <div className="col-span-1 flex items-center">
        //             <p className="font-medium">剩余奖励</p>
        //         </div> <div className="col-span-1 flex items-center">
        //             <p className="font-medium">已派发奖励</p>
        //         </div>
        //         <div className="col-span-1 flex items-center">
        //             <p className="font-medium">未派发奖励</p>
        //         </div>
        //     </div>

        //     {productData.map((product, key) => (
        //         <div
        //             className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
        //             key={key}
        //         >
        //             <div className="col-span-3 flex items-center">
        //                 <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        //                     <div className="h-12.5 w-15 rounded-md">
        //                         <img src={product.image} alt="Product" />
        //                     </div>
        //                     <p className="text-sm text-black dark:text-white">
        //                         {product.name}
        //                     </p>
        //                 </div>
        //             </div>
        //             <div className="col-span-2 hidden items-center sm:flex">
        //                 <p className="text-sm text-black dark:text-white">
        //                     {product.category}
        //                 </p>
        //             </div>
        //             <div className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
        //                 <h5 className="font-medium text-black dark:text-white">
        //                     ￥ 23.09
        //                 </h5>
        //                 <p className="text-sm"> ≈ 22.94 HAH</p>
        //                 <p className="text-sm"> ≈ 21.62 USDT</p>
        //             </div>
        //             <div className="col-span-1 flex items-center">
        //                 <p className="text-sm text-black dark:text-white">{product.sold}</p>
        //             </div>
        //             <div className="col-span-1 flex items-center">
        //                 <p className="text-sm text-meta-3">${product.profit}</p>
        //             </div>
        //         </div>
        //     ))}
        // </div>
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
                <div className="py-6 px-4 md:px-6 xl:px-7.5">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        奖池奖励商品列表
                    </h4>
                </div>
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[240px] py-4 px-4 font-medium text-black dark:text-white ">
                                商品名称
                            </th>
                            <th className="min-w-[140px] py-4 px-4 font-medium text-black dark:text-white">
                                商品金额
                            </th>
                            <th className="min-w-[140px] py-4 px-4 font-medium text-black dark:text-white">
                                订单完成时间
                            </th>
                            <th className="min-w-[140px] py-4 px-4 font-medium text-black dark:text-white">
                                购买账户
                            </th>
                            <th className="min-w-[140px] py-4 px-4 font-medium text-black dark:text-white">
                                订单编号
                            </th>
                            <th className="min-w-[140px] py-4 px-4 font-medium text-black dark:text-white">
                                总奖励
                            </th>
                            <th className="min-w-[140px] py-4 px-4 font-medium text-black dark:text-white">
                                剩余奖励
                            </th>
                            <th className="min-w-[140px] py-4 px-4 font-medium text-black dark:text-white">
                                已派发奖励
                            </th>
                            <th className="min-w-[140px] py-4 px-4 font-medium text-black dark:text-white">
                                未派发奖励
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {packageData.map((packageItem, key) => (
                            <tr key={key}>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark ">
                                    <div className="col-span-3 flex items-center">
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                            <div className="h-12.5 w-15 rounded-md">
                                                <img src={packageItem.referral_reward.order_good.image} alt="Product" />
                                            </div>
                                            <p className="text-sm text-black dark:text-white">
                                                {packageItem.referral_reward.order_good.goods_name}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <h5 className="font-medium text-black dark:text-white">
                                        {packageItem.referral_reward.order_good.total_price}
                                    </h5>
                                    <p className="text-sm"> ≈ {((parseInt(packageItem.referral_reward.order_good.total_price) / 7.2) / 1.2).toFixed(2)} HAH</p>
                                    <p className="text-sm"> ≈ {(parseInt(packageItem.referral_reward.order_good.total_price) / 7.2).toFixed(2)} USDT</p>
                                </td>

                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {packageItem.referral_reward.order_good.create_time}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {packageItem.referral_reward.order_good.inviter_id}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {packageItem.referral_reward.order.order_sn}

                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <h5 className="font-medium text-black dark:text-white">
                                        {packageItem.referral_reward.order_good.total_price}
                                    </h5>
                                    <p className="text-sm"> ≈ {((parseInt(packageItem.referral_reward.order_good.total_price) / 7.2) / 1.2).toFixed(2)} HAH</p>
                                    <p className="text-sm"> ≈ {(parseInt(packageItem.referral_reward.order_good.total_price) / 7.2).toFixed(2)} USDT</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <h5 className="font-medium text-black dark:text-white">
                                        {packageItem.referral_reward.order_good.total_price}
                                    </h5>
                                    <p className="text-sm"> ≈ {((parseInt(packageItem.referral_reward.order_good.total_price) / 7.2) / 1.2).toFixed(2)} HAH</p>
                                    <p className="text-sm"> ≈ {(parseInt(packageItem.referral_reward.order_good.total_price) / 7.2).toFixed(2)} USDT</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <h5 className="font-medium text-black dark:text-white">
                                        {packageItem.referral_reward.order_good.total_price}
                                    </h5>
                                    <p className="text-sm"> ≈ {((parseInt(packageItem.referral_reward.order_good.total_price) / 7.2) / 1.2).toFixed(2)} HAH</p>
                                    <p className="text-sm"> ≈ {(parseInt(packageItem.referral_reward.order_good.total_price) / 7.2).toFixed(2)} USDT</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <h5 className="font-medium text-black dark:text-white">
                                        {packageItem.referral_reward.order_good.total_price}
                                    </h5>
                                    <p className="text-sm"> ≈ {((parseInt(packageItem.referral_reward.order_good.total_price) / 7.2) / 1.2).toFixed(2)} HAH</p>
                                    <p className="text-sm"> ≈ {(parseInt(packageItem.referral_reward.order_good.total_price) / 7.2).toFixed(2)} USDT</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TablePoolAward;

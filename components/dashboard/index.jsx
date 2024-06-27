'use client'

import Card from "../card";
import { FaUser } from 'react-icons/fa';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { MdOutlineProductionQuantityLimits} from 'react-icons/md';
import { BsFillPersonCheckFill } from 'react-icons/bs';

export default function DashboardLayout({allProducts, allVisitors}) {
    console.log(allProducts , ' ' , allVisitors);
    return (
        <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
                <Card label={'Total Premium Visitors'} icon={<FaUser size={25} />} data={allVisitors && allVisitors.length ? allVisitors.reduce((acc, visitorItem) => parseInt(acc + visitorItem.premiumUserNo), 0) : 0 }/>
                <Card label={'Total Products'} icon={<MdOutlineProductionQuantityLimits size={25} />} data={allProducts && allProducts.length}/>
                <Card label={'Total Sales'} icon={<BiMoneyWithdraw size={25} />} data={allProducts && allProducts.length ? allProducts.reduce((acc, productItem) => parseInt(acc + productItem.sales), 0): 0 } />
                <Card label={'Total Visitors'} icon={<BsFillPersonCheckFill size={25} />} data={allVisitors && allVisitors.length ? allVisitors.reduce((acc, visitorItem) => parseInt(acc + visitorItem.visitors), 0): 0 } />
            </div>
        </div>
    )
}
'use client';

import { yearlyAnalyticsChartOptions } from "@/utils/config";
import ReactApexChart from "react-apexcharts";

const monthArray = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

function getSales(products, getMonth) {
    if (products.filter(item=> item.month === getMonth).length === 0) return 0;
    return products.filter(item=>item.month === getMonth).reduce((acc, productItem)=> acc + productItem.sales, 0);
}

function getCost(products, getMonth) {
    if (products.filter(item=> item.month === getMonth).length === 0) return 0;
    return products.filter(item=>item.month === getMonth).reduce((acc, productItem)=> acc + productItem.sales, 0);
}

function getReveneu(products, getMonth) {
    if (products.filter(item=> item.month === getMonth).length === 0) return 0;
    return products.filter(item=>item.month === getMonth).reduce((acc, productItem)=> acc + productItem.sales, 0);
}

export default function YearlyAnalyticsChart ({allProducts}) {
    console.log(allProducts);
    const series = [
        {
            name: 'Sales',
            data: monthArray.map(item=>getSales(allProducts, item))
        },
        {
            name: 'Cost',
            data: monthArray.map(item=>getCost(allProducts, item))
        },
        {
            name: 'Reveneu',
            data: monthArray.map(item=>getReveneu(allProducts, item))
        },
    ];
    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-8">
            <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
                <p className="font-bold text-primary">Yearly Analytics Overview</p>
                <div className="w-full">
                    <div id="YearlyAnalyticsChart" className="-ml-5">
                        <ReactApexChart options={yearlyAnalyticsChartOptions} series={series} type="area" height={350} />
                    </div>
                </div>
            </div>
        </div>
    )
}
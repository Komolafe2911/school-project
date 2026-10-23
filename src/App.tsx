import NavBar from "./components/ui/NavBar"
import { ArrowUpIcon, BarChartIcon, Bell, X, RatioIcon, Sun, Zap, ArrowRightIcon } from "lucide-react"
import { Button } from "./components/ui/button"
import { useState } from "react"


export default function App() {
  const [range, setRange] = useState("Today");
  const [activeNav, setActiveNav] = useState("Overview")
  return (
    <> <section className="bg-gray-200 p-3">
      <NavBar />
      <div className="m-3 p-2 ">
        <h1 className="mt-4 text-sm italic text-gray-500 mb-2">
          KiloWattz / LIVE OPERATIONS
        </h1>

        <p className="text-2xl">Good Morning, Praise.</p>
        <h2 className="italic text-gray-400">Your solar is performing 5.8% above forecast today.</h2>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="border bg-white mt-5 p-5 rounded-4xl text-2xl font-bold">
          <h1 className="flex justify-between pt-2 mb-2 font-extralight text-sm ">LIVE OUTPUT <Zap size={20} color="orange" className="border" /> </h1>
          18.42MW
          <p className="flex items-center gap-1 mt-4 text-sm">
            <ArrowUpIcon size={10}
              className="font-extralight" /> 4.8% vs forecast
          </p>
        </div>
        <div className="border bg-white mt-5 p-5 rounded-2xl font-extrabold text-2xl">
          <h1 className="flex justify-between text-sm font-extralight">
            ENERGY TODAY <Sun color="green" />
          </h1> 112.8WHM
          <p className="flex items-center gap-1 mt-2 text-sm font-bold">
            <ArrowUpIcon size={10}
              className="font-extrabold" /> 7.2% vs yesterday
          </p>
        </div>
        <div className="border bg-white rounded-4xl mt-5 p-5 text-2xl font-bold">
          <h1 className="flex justify-between font-extralight text-sm">
            REVENEW TODAY <BarChartIcon color="blue" className="border" />
          </h1>
          $8,206
          <p className="flex items-center text-sm gap-1 mt-2"> <ArrowUpIcon size={10} />1.4% this month</p>
        </div>
        <div className="border rounded-4xl mt-5 p-5 bg-white font-bold text-2xl">
          <h1 className="flex justify-between text-sm font-extralight">PERFOMANCE RATIO <RatioIcon color="red" /></h1>
          94.7%
          <p className="flex items-center gap-1 mt-2 text-sm"> <ArrowUpIcon size={10} /> 0.6% vs. baseline</p>
        </div>
      </div>
      <div className="border rounded-4xl mt-4 p-5  bg-white">
        <p className="flex justify-between font-normal text-black">Power Production
          <div className="range-tabs">
            {
              ["Today", "7days", "30 days"].map((item) => (
                <Button className={range === item ? "selected" : ""} key={item} onClick={() => setRange(item)}>
                  {item}
                </Button>
              ))}
          </div>
        </p>
        <p className="font- text-sm text-gray-400">Actual output against today's forecast</p>
        <h2 className="mt-2 p-5 pb-0">Current output</h2>
        <div className="flex justify-between items-center text-sm font-extralight">
          <p className="translate-x-6 pb-4">18.42MW</p>
          --- Actual --- Forecast
        </div>
        <div className="translate-x-10/14 text-sm font-mono mt-1">NOW</div>
        <div className="flex">
          <div className="shrink-0 w-14 flex flex-col justify-between text-sm text-gray-500 h-57.5 pt-1.25 pb-[3] ml-2 leading-none"><span>24 MW</span><span>18 MW</span><span>12 MW</span><span>6 MW</span><span>0</span></div>
          <div className="flex-1 min-w-0">
            <svg className="w-full block"
              preserveAspectRatio="none"
              viewBox="0 0 700 230">
              <defs>
                <linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#f4b63f" stopOpacity=".28" />
                  <stop offset="100%" stopColor="#f4b63f" stopOpacity=".02" />
                </linearGradient>
              </defs>
              <g stroke="#e5e7eb" strokeWidth="1">
                <line x1="0" x2="700" y1="12" y2="12" />
                <line x1="0" x2="700" y1="64" y2="64" />
                <line x1="0" x2="700" y1="116" y2="116" />
                <line x1="0" x2="700" y1="168" y2="168" />
                <line x1="0" x2="700" y1="220" y2="220" />
              </g>
              <path
                d="M0 219 C80 218 110 193 155 157 S230 76 294 49 S405 15 475 27 S590 91 700 190"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="2"
                strokeDasharray="6 6" />
              <path
                d="M0 220 C75 220 114 199 158 161 S233 83 294 55 S400 20 472 34 S584 99 700 194 L700 230 L0 230 Z"
                fill="url(#areaFill)" />
              <path
                d="M0 220 C75 220 114 199 158 161 S233 83 294 55 S400 20 472 34 S584 99 700 194"
                fill="none"
                stroke="#f4b63f"
                strokeWidth="3" />
              <line
                x1="489" x2="489" y1="22" y2="220"
                stroke="#9ca3af"
                strokeWidth="1"
                strokeDasharray="4 4" />
              <circle cx="489" cy="39" r="7" fill="#f4b63f" fillOpacity="0.25" />
              <circle cx="489" cy="39" r="3.5" fill="#f4b63f" />
            </svg>
            <div className="flex justify-between text-sm text-gray-500 mt-2"><span>6 AM</span><span>9 AM</span><span>12 PM</span><span>3 PM</span><span>6 PM</span><span>6 PM</span></div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="bg-white w-max border p-2 rounded-2xl">
          <h1 className="flex gap-15">Site Conditions
            <p className="border p-1 rounded-2xl text-sm bg-green-200 text-green-900 font-extralight">⏺ Optimal</p>
          </h1>
          <p className="text-sm text-gray-400 mt-1">On-site weather station</p>
          <p className="flex items-center gap-2 mt-5 text-2xl font-bold"><Sun size={40} color="orange" className="border p-1 py-1 bg-orange-200 rounded" /> 28&deg;</p>
          <p className="text-gray-400 translate-x-11 mb-1 py-1 border-b -translate-y-4"><small>Clear skies</small></p>
          <span className="p-2 flex gap-9 py-1 text-gray-500 text-sm">IRRADIANCE<span>WIND</span></span>
          <div className="flex items-center ml-3 font-bold"> 8.4<small className="font-extralight">km/h</small>
            <span>
              <p className="translate-x-16">
                892<small className="font-extralight">W/m&sup2;</small>
              </p>
            </span>
          </div>
          <div className="p-2 flex relative gap-10 py-4 text-gray-500 text-sm">HUMIDITY<span>MODULE TEMP</span></div>
          <p className="flex gap-20 p-4 py-1 -translate-y-4 font-bold">34%
            <p>42.6<small>&deg;C</small></p>
          </p>
        </div>
        <div className="border rounded-2xl bg-white py-1 p-2 mt-2">
          <span className="flex justify-between font-bold">Assets Health
            <span><Button onClick={() => setActiveNav("Assets")} className="bg-white text-black border-3">View all assets<ArrowRightIcon /></Button></span>
          </span>
          <p className="font-extralight text-sm text-gray-500 ">Real-time status across all field equipment</p>
          <div className="grid grid-cols-4 gap-4 mt-3 border-t p-2 ml-1">
            <div className="flex flex-col border-r">
            <strong className="text-lg ml-3">1,248</strong>
            <small className="text-gray-500 mt-1">Solar modules</small>
            <div className="flex gap-1 mt-1">
            <small className=" text-green-300">⏺</small> <small className="flex justify-center">100% online</small></div>
            </div>
            <div className="flex flex-col border-r">
            <strong className="ml-3 text-lg">48</strong>
            <small className="p-1">Inverters</small>
            <div className="flex gap-1 mt-1">
            <small className="text-orange-400">⏺</small><small className="flex">47 online, 1 warning</small></div>
            </div>
            <div className="flex flex-col border-r">
            <strong className="text-lg ml-3">12</strong><small className="p-1">Combiner boxes</small>
            <div className="flex gap-1">
            <small className="text-green-300">⏺</small>
            <small>100% online</small>
            </div>
            </div>
            <div className="border-r">
            <strong className="ml-8 text-lg">6</strong>
            <p><small>Weather sensors</small></p>
              <div className="flex gap-1">
            <small className="text-green-300">⏺</small>
            <small>100% online</small>
            </div>
            </div>
          </div>
          <div className="border rounded-2xl bg-gray-200 p-2 mt-5 mb-1">
              <small className="text-sm text-gray-500">SITE UPTIME</small>
              <p className="font-extrabold text-2xl">99.94%</p>
              <small className="font-extralight text-gray-500">Last 30 days</small>
            </div>
        </div>
      </div>
      <div className="w-max -translate-y-120 translate-x-72 border bg-white rounded-2xl mt-2 p-6 py-3">
        <span className="flex gap-1 mb-1 text-gray-500 text-sm -translate-x-4"><Bell size={25} color="brown" className="py-1 border-e-5 rounded-2xl" />PERFORMANCE ALERT</span>
        <p className="flex translate-x-52 -translate-y-8 gap-2"><small className="flex items-center justify-center -translate-x-4 font-extralight">12mins ago</small>
          <button className="-translate-x-5"><X size={15} /></button>
        </p>
        <span className="ml-6 font-black text-sm">Inverter B-14 underperforming
          <p className="ml-8 font-extralight">Output is 8.2% below its peer group.</p>
          <div className="flex items-center gap-1 p-1 text-sm ml-15"><small>Review asset</small><ArrowRightIcon size={10} /></div>
        </span>
        <div>
        </div>
      </div>
    </section>
    </>
  )
};

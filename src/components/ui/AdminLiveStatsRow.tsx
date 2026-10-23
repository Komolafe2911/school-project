import "./admin.css";

type StatTone = "solar" | "home" | "battery" | "grid";

type Stat = {
  id: string;
  label: string;
  value: string;
  unit: string;
  note: string;
  tone: StatTone;
};

// Hardcoded mock data. Replace with live data later.
const mockStats: Stat[] = [
  {
    id: "production",
    label: "Solar production",
    value: "4.2",
    unit: "kW",
    note: "Peak today: 5.1 kW at 12:40",
    tone: "solar",
  },
  {
    id: "consumption",
    label: "Home usage",
    value: "2.8",
    unit: "kW",
    note: "Fridge, AC and 3 other loads",
    tone: "home",
  },
  {
    id: "battery",
    label: "Battery charge",
    value: "76",
    unit: "%",
    note: "Charging at 1.1 kW",
    tone: "battery",
  },
  {
    id: "grid",
    label: "Sent to grid",
    value: "0.3",
    unit: "kW",
    note: "No power drawn from grid",
    tone: "grid",
  },
];

export default function AdminLiveStatsRow() {
  return (
    <section className="admin-scope" aria-labelledby="live-stats-title">
      <h2 id="live-stats-title">Live system stats</h2>
      <div className="stats-strip">
        {mockStats.map((stat) => (
          <div key={stat.id} className={`stat stat--${stat.tone}`}>
            <div className="stat__label">{stat.label}</div>
            <div className="stat__value">
              {stat.value}
              <span className="stat__unit">{stat.unit}</span>
            </div>
            <div className="stat__note">{stat.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

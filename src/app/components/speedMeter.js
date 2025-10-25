export default function SpeedMeter({ speed, loading }) {
  return (
    <div className="text-center">
      <div className="text-[10rem] font-semibold text-black">
        {loading ? "..." : speed ? speed : "--"}
      </div>
      <div className="text-2xl text-gray-600">Mbps</div>
    </div>
  );
}

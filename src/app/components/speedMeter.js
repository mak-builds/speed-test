// export default function SpeedMeter({ speed, loading }) {
//   return (
//     <div className="text-center">
//       <div className="text-[10rem] font-semibold text-black">
//         {loading ? "..." : speed ? speed : "--"}
//       </div>
//       <div className="text-2xl text-gray-600">Mbps</div>
//     </div>
//   );
// }

export default function SpeedMeter({ download, upload, loading }) {
  return (
    <div>
      <div className="my-4">
        <p className="text-sm uppercase text-gray-400">Download</p>
        <p className="text-6xl font-bold">
          {loading && !download ? "..." : download ? download.toFixed(2) : "--"}
        </p>
        <p className="text-gray-400 text-lg">Mbps</p>
      </div>

      <div className="my-4">
        <p className="text-sm uppercase text-gray-400">Upload</p>
        <p className="text-6xl font-bold">
          {loading && !upload ? "..." : upload ? upload.toFixed(2) : "--"}
        </p>
        <p className="text-gray-400 text-lg">Mbps</p>
      </div>
    </div>
  );
}

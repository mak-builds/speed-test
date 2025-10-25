export default function InfoPanel({ userInfo }) {
  if (!userInfo) return null;

  return (
    <div className="mt-6 text-gray-300 text-sm space-y-1">
      <p>
        📍 {userInfo.city}, {userInfo.country_name}
      </p>
      <p>🏠 ISP: {userInfo.org || userInfo.isp || "Unknown"}</p>
      <p>📶 Connection: Wi-Fi</p>
    </div>
  );
}

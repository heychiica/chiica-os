export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8f6f2", padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#B08D57", fontSize: "48px" }}>Good Morning, Cherisse ☀️</h1>
      <p style={{ color: "#555", fontSize: "22px" }}>Welcome to CHIICA OS — your CEO Command Center.</p>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "40px" }}>
        {["Today’s Revenue", "Appointments Today", "New WhatsApp Leads", "Outstanding Invoices", "Payroll Due", "Daily Priorities"].map((title) => (
          <div key={title} style={{ background: "white", padding: "24px", borderRadius: "18px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: "#B08D57", fontSize: "20px" }}>{title}</h2>
            <p style={{ color: "#333", fontSize: "28px", fontWeight: "bold" }}>—</p>
          </div>
        ))}
      </section>

      <section style={{ marginTop: "40px", background: "white", padding: "28px", borderRadius: "18px" }}>
        <h2 style={{ color: "#B08D57" }}>Business Hubs</h2>
        <p>💇 Follicle to Finish · 🚰 SHP Plumbing · 👠 CHIIC · 📚 Academy · 💪 BODEE · ✈️ Travel</p>
      </section>
    </main>
  );
}
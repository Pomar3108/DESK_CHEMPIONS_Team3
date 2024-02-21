import { sql } from "@vercel/postgres";

// Assuming team logos are stored in the 'logos' folder
const logosFolder = '/logos/';

export default async function Page() {
  const { rows } = await sql`SELECT * from Team_Standings ORDER BY points DESC`;

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Hello, Dashboard Page!</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
        <tr style={{ background: 'gray', color: 'white' }}>
            <th colSpan="8" style={{ padding: '8px', border: '1px solid #ddd' }}> Season 2023-24 Final Standings</th>
          </tr>
          <tr style={{ background: 'black', color: 'white' }}>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Club</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Team</th>
           
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Wins (W)</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Draws (D)</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Loses (L)</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Goal Difference (GD)</th>
            <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{index + 1}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                  <img src={`/logos/${row.team}.png`} alt={row.team} width="50" height="50" />
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{row.team}</td>
             
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{row.wins}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{row.draws}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{row.loses}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{row.goalsdifference}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

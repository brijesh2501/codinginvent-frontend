// ============================================================
// ComparisonTable — reusable side-by-side comparison table
// ============================================================
import type { BlogComparison } from "../../types";
import "./ComparisonTable.css";

interface Props {
  comparison: BlogComparison;
}

export default function ComparisonTable({ comparison }: Props) {
  return (
    <div className="ci-comparison">
      <h4 className="ci-comparison__title">{comparison.title}</h4>
      <div className="ci-comparison__wrapper">
        <table className="ci-comparison__table">
          <thead>
            <tr>
              <th className="ci-comparison__th ci-comparison__th--aspect">Aspect</th>
              <th className="ci-comparison__th ci-comparison__th--left">
                {comparison.headers[0]}
              </th>
              <th className="ci-comparison__th ci-comparison__th--right">
                {comparison.headers[1]}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, i) => (
              <tr key={i} className="ci-comparison__row">
                <td className="ci-comparison__td ci-comparison__td--aspect">
                  {row[0]}
                </td>
                <td className="ci-comparison__td ci-comparison__td--left">
                  {row[1]}
                </td>
                <td className="ci-comparison__td ci-comparison__td--right">
                  {row[2]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

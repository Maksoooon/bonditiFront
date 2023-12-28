import "../App.css";

function Dictionary({ words }) {
  console.log(words);
  return (
    <div>
      <table className="dictionary-table">
        <tbody>
          <tr>
            <th>Слово</th>
            <th>Определение</th>
          </tr>
          {words.map((station) => (
            <tr key={station.word_id}>
                <td>{station.wordName}</td>
                <td>{station.wordDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dictionary;

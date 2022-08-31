import {useState} from 'react';
import '../App.css';


export default function Search() {
    const [showTable, setShowTable] = useState(true);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const [loading, setLoading] = useState(true);

    
  

    const handleChange = (e) => {
        setSearch(e.target.value);
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (search.length > 0) {
            fetch(`http://localhost:4000/station/${search}`)
                .then(res => res.json())
                .then(data => {
                    setResults(data);
                    setLoading(false);
                    setShowTable(false);
                
                });

    }
}

    return (
        <div className='Searchcontainer'>
            <form onSubmit={handleFormSubmit}>
                <input className='searchbar' type="text" value={search} onChange={handleChange} />
                <p>Results can take up to 15 seconds to load...</p>
            </form>

            
            <table hidden={showTable} >
                <thead>

                <tr>
                    <th>Station ID</th>
                    <th>Date</th>
                    <th>Element</th>
                    <th>Data Value</th>
                    <th>M-Flag</th>
                    <th>Q-Flag</th>
                    <th>S-Flag</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                {loading ? <p>Loading...</p> : results.map((result, index) => (
                        <tr key={index}>
                            <td>{result[0]}</td>
                            <td>{result[1]}</td>
                            <td>{result[2]}</td>
                            <td>{result[3]}</td>
                            <td>{result[4]}</td>
                            <td>{result[5]}</td>
                            <td>{result[6]}</td>
                            <td>{result[7]}</td>
                        </tr>
                      ))}
                </tbody>
            </table>
          
        </div>
    )
}

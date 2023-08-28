export const Filter = ({ value, onChange }) => {
    return (
        <label>
            <input type="text"
                name="filter"
                value={value} onChange={onChange} />
        </label>
    )
}
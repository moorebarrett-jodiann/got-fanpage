
function ManageCatalog(props) {
    const handleSortOptionChange = (option) => {
        props.onSortOptionChange(option);
    };

    return (
        <div className="filter-container">
            <div className="sort-options">
                <label>Sort By</label>
                <button
                    className={`firstName ${props.sortingOption === "name" ? "active" : ""}`}
                    onClick={() => handleSortOptionChange("name")}
                    >
                    First Name
                    {(props.sortingOption === "name") ?
                        <i className="fa-solid fa-angle-down"></i>
                        :
                        <i className="fa-solid fa-angle-left"></i>
                    }
                </button>
                <button
                    className={`title ${props.sortingOption === "title" ? "active" : ""}`}
                    onClick={() => handleSortOptionChange("title")}
                    >
                    Title
                    {(props.sortingOption === "title") ?
                        <i className="fa-solid fa-angle-down"></i>
                        :
                        <i className="fa-solid fa-angle-left"></i>
                    }
                </button>
            </div>
            <button className="add-new-item"><i className="fa-solid fa-plus"></i> Add New</button>
        </div>
    )
}

export default ManageCatalog
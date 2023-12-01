export default function Card() {
    return(
        <div className="card">
    <div className="favorite">
        <img src="/img/heartInactive.svg" alt="Grey Heart" />
    </div>

    <img width={133} height={112} src='/img/sneakers/greenNike.jpg' alt='greenNike' />

    <h5>Men sneakers Nike Blazer Mid Suede</h5>

    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
            <span>Price:</span>

            <b>150 euro</b>
        </div>

        <button className="button">
            <img width={11} height={11} src='/img/cardSelectorPlus.svg' alt='Plus' />
        </button>
    </div>
</div>
    )
}




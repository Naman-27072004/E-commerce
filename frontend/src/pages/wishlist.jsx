const Wishlist = () => {
    return (
        <div className="flex flex-col items-left justify-center min-h-screen -mt-32 ml-40">
            <div>
                <span>Wishlist</span><br />
                <button className="border p-1 rounded">Add All To Cart</button>
            </div>
            <div>
                <span>Suggestions</span><br />
                <button className="border p-1 rounded">See All</button>
            </div>
        </div>
    )
}

export default Wishlist
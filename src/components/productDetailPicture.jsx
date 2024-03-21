function ProductDetailPicture({ url, changePicture, isSelected }) {
  return (
    <div
      className={`mt-5 flex ${isSelected ? "border border-black" : ""}`}
      onClick={() => changePicture(url)}
    >
      <img
        className="h-40 w-40"
        src={url}
        alt="Imagen secundaria de producto"
      />
    </div>
  );
}

export default ProductDetailPicture;

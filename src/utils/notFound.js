const notFound = (req, res) => {
  res.json({ message: "Route not found" });
};

export default notFound;

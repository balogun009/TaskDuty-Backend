const methodNotAllowed = (req, res) => {
  res.json({ message: "Method not allowed" });
};

export default methodNotAllowed;

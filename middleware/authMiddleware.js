const authKey = "8a60348b-d4a4-564a-9b45-aab518adb7f4"

module.exports = (req, res, next) => {
  const key = req.header('apiauthkey');
  if (!key) {
    return res.status(401).json({ message: "Access denied, apiauthkey is missing" });
  }
  if (key !== authKey) {
    return res.status(401).json({ message: "Failed to authenticate apiauthkey" });
  }
  next();
};

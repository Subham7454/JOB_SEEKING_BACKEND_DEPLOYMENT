export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const options = {
    expires: "1h",
    httpOnly: true, // Set httpOnly to true
    secure: true,
    sameSite:"None",
  };
  console.log(typeof process.env.JWT_EXPIRE);

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};

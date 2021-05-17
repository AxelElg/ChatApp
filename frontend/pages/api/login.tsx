// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(req, typeof req);
  
  res.status(200).json({ user: 'succes' })
}

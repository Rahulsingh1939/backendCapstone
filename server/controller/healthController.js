const healthController = (req,res) =>  {
    try{
            res.sendFile(__dirname+'/public/running.html')
    } catch(err)
    {
        console.log(err);
        res.sendFile(__dirname+'/public/error.html')
    }
}

module.exports = healthController
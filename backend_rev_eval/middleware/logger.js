
export const logger = (res,req,next) => {

    console.log(`[{$(new Date().toISOstring()} ${req.method} ${req.originurl}]`)

next();
}
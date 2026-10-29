// 301 från www.rmef.se till rmef.se. Google indexerade båda värdnamnen som egna sidor.
// Allt annat passerar orört till statiska filer och övriga functions.
export const onRequest: PagesFunction = async ({ request, next }) => {
  const url = new URL(request.url);
  if (url.hostname === "www.rmef.se") {
    url.hostname = "rmef.se";
    return Response.redirect(url.toString(), 301);
  }
  return next();
};

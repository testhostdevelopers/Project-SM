export function linkResolver(document) {
  console.log(document.type, "document.type");
    if (document.type === "test") {
      return "/blog/" + document.uid;
    }
  
    return "/";
  }
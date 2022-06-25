export function getBookId(bookKey:string): string{
  const bookIdSeparate = bookKey.split('/');
  const bookId = bookIdSeparate[bookIdSeparate.length - 1];
  return bookId;
}
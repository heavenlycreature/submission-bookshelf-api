const {
  getAllBookHandler, addBooksHandler, getBooksById, editBooksByIdHandler, deleteBookByIdHandler,
} = require('./handler');

const routes = [{
  method: 'POST',
  path: '/books',
  handler: addBooksHandler,
},
{
  method: 'GET',
  path: '/books',
  handler: getAllBookHandler,
},
{
  method: 'GET',
  path: '/books/{bookId}',
  handler: getBooksById,
},
{
  method: 'PUT',
  path: '/books/{bookId}',
  handler: editBooksByIdHandler,
},
{
  method: 'DELETE',
  path: '/books/{bookId}',
  handler: deleteBookByIdHandler,
}];
module.exports = routes;

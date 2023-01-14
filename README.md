# WorkFlow
### seller router
- method POST pada endpoint "/seller/product/:sellerId" dilakukan untuk posting produk makanan, yang nantinya akan di tebus oleh donatur. tentunya harus memiliki id_seller yang tepat untuk melakukan posting data, jika id_seller tidak tervalidasi, maka post data tidak dapat dioperasikan. Parameter yang dibutuhkan dalam POST data (name:string, qty:number, desc:string, prize:number)
- method GET pada endpoint "/seller" digunakan untuk melihat list semua seller dalam sistem.
- method GET pada endpoint "/seller/product/:sellerId digunakan untuk melihat list produk dalam suatu seller
- method GET pada endpoint "/seller/history/:sellerId" digunakan untuk melihat riwayat penebusan dan claimer dalam suatu seller
- method DELETE pada endpoint "/seller/product/:sellerId/:productId" digunakan untuk menghapus sebuah produk dari seller apapun resikonya.

### contributor router
- method Get pada "/contributor/products" digunakan untuk melihat semua makanan yang dijual oleh pihak seller
- method Post pada "/contributor/purchase/:contributorId" digunakan untuk melakukan penebusan product makanan yang dijual oleh pihak seller. Parameter yang dibutuhkan dalam POST data: (qty:number, prize:number, id_seller:string, id_product:string). Hal yang perlu diperhatikan jika contributorId tidak valid (dimana id pengguna yang ingin melakukan penebusan bukan termasuk role donatur) maka tidak bisa melakukan operasi ini

### users router
- method GET pada "/users/leftoffers" digunakan untuk melihat semua list makanan dari pihak seller yang telah ditebus oleh donatur.
- method POST pada "/users/claim/constributorId" digunakan untuk melakukan claim makanan leftovers dari seller yang sudah ditebus oleh donatur. Parameter yang dibutuhkan dalam POST data: (id_seller:string, id_product:string) hal ini karena untuk menentukan leftover apa yang akan di claim oleh pengguna.

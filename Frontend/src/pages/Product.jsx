// "use client"

// import { useState, useRef } from "react"
// import React from "react"
// import { motion, useInView } from "framer-motion"
// import { ArrowRight, Star, Sparkles } from "lucide-react"
// import { Link } from "react-router-dom"
// import WhatsAppButton from "../common/WhatsAppButton"

// const products = [
//   {
//     id: "tmt-bars",
//     name: "TMT Fe 500 Bars",
//     description: "High-strength thermo-mechanically treated steel bars for construction",
//     image: "/placeholder.svg?height=400&width=600",
//     specs: "Fe 500, Diameter: 8mm to 32mm",
//     price: "₹58,000 - ₹62,000 per ton",
//     rating: 4.8,
//     totalRatings: 124,
//     popular: true,
//   },
//   {
//     id: "steel-rods",
//     name: "MS Round Bars",
//     description: "Mild steel round bars for various structural applications",
//     image: "/placeholder.svg?height=400&width=600",
//     specs: "Diameter: 6mm to 50mm",
//     price: "₹55,000 - ₹58,000 per ton",
//     rating: 4.5,
//     totalRatings: 87,
//     popular: false,
//   },
//   {
//     id: "steel-sheets",
//     name: "HR Steel Sheets",
//     description: "Hot rolled steel sheets with excellent formability",
//     image: "/placeholder.svg?height=400&width=600",
//     specs: "Thickness: 2mm to 12mm",
//     price: "₹65,000 - ₹70,000 per ton",
//     rating: 4.4,
//     totalRatings: 72,
//     popular: true,
//   },
//   {
//     id: "pipes",
//     name: "MS Pipes",
//     description: "Mild steel pipes for structural and fluid transportation",
//     image: "/placeholder.svg?height=400&width=600",
//     specs: "Diameter: 15mm to 150mm",
//     price: "₹60,000 - ₹65,000 per ton",
//     rating: 4.3,
//     totalRatings: 91,
//     popular: false,
//   },
// ]

// export default function ProductShowcase() {
//   const [hoveredId, setHoveredId] = useState(null)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.2 })

//   return (
//     <section id="products" className="py-20 bg-zinc-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Products</h2>
//           <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
//             We offer a wide range of high-quality steel products to meet all your construction and industrial needs.
//           </p>
//         </motion.div>

//         <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               onMouseEnter={() => setHoveredId(product.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               whileHover={{
//                 y: -10,
//                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                 transition: { duration: 0.3 },
//               }}
//               className="group relative overflow-hidden rounded-lg bg-white border border-zinc-200 transition-all duration-300 transform perspective-1000"
//             >
//               {product.popular && (
//                 <div className="absolute top-3 right-3 z-10 bg-accent text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
//                   <Sparkles className="h-3 w-3" />
//                   Popular
//                 </div>
//               )}

//               <div className="aspect-video overflow-hidden">
//                 <motion.img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover transition-transform duration-500"
//                   animate={{
//                     scale: hoveredId === product.id ? 1.1 : 1,
//                   }}
//                 />

//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                 >
//                   <div className="text-white">
//                     <h4 className="font-bold">{product.name}</h4>
//                     <p className="text-sm text-zinc-300">{product.specs}</p>
//                   </div>
//                 </motion.div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">{product.name}</h3>

//                 <div className="flex items-center gap-1 mb-2">
//                   <div className="flex">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <Star
//                         key={star}
//                         className={`h-4 w-4 ${
//                           star <= Math.floor(product.rating)
//                             ? "text-yellow-400 fill-yellow-400"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                   <span className="text-zinc-500 text-xs">({product.totalRatings})</span>
//                 </div>

//                 <p className="text-zinc-600 mb-4 line-clamp-2">{product.description}</p>
//                 <div className="text-sm font-medium text-zinc-500 mb-2">Specs: {product.specs}</div>
//                 <p className="font-medium text-primary mb-4">{product.price}</p>

//                 <div className="flex justify-between items-center">
//                   <Link href={`/products/${product.id}`}>
//                     <motion.div
//                       whileHover={{ x: 5 }}
//                       className="inline-flex items-center text-primary font-medium"
//                     >
//                       View Details <ArrowRight className="ml-2 h-4 w-4" />
//                     </motion.div>
//                   </Link>

//                   <WhatsAppButton
//                     showText={false}
//                     message={`Hi, I'm interested in ${product.name} from Shri Durga Steel.`}
//                   />
//                 </div>
//               </div>

//               {/* Optional animated floating circles for 3D feel */}
//               <div className="absolute inset-0 pointer-events-none">
//                 <div className="absolute -left-10 -top-10 w-20 h-20 bg-primary/5 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>
//                 <div className="absolute -right-10 -bottom-10 w-20 h-20 bg-accent/5 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <Link href="/products">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors shadow-md"
//             >
//               View All Products
//             </motion.button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

///////////////////
// import React from 'react'
// import { useState, useRef, useEffect } from "react";
// import { 
//   Box,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Chip,
//   Container,
//   Divider,
//   Grid,
//   IconButton,
//   Link,
//   Paper,
//   Rating,
//   Skeleton,
//   Snackbar,
//   Stack,
//   Typography,
//   Tooltip,
//   useMediaQuery,
//   alpha
// } from "@mui/material";
// import { 
//   ArrowForward,
//   Star,
//   AutoAwesome,
//   WhatsApp,
//   Favorite,
//   FavoriteBorder,
//   ShoppingCart,
//   FilterList,
//   Check,
//   Phone,
//   Public,
//   LocationOn,
//   LocalShipping
// } from "@mui/icons-material";
// import { motion } from "framer-motion";
// import { useTheme } from "@mui/material/styles";
// import MuiAlert from "@mui/material/Alert";

// // Motion components with MUI
// const MotionBox = motion(Box);
// const MotionButton = motion(Button);
// const MotionIconButton = motion(IconButton);
// const MotionCard = motion(Card);
// const MotionContainer = motion(Container);

// // Simulated product data
// const products = [
//   {
//     id: "tmt-bars",
//     name: "TMT Fe 500 Bars",
//     description: "High-strength thermo-mechanically treated steel bars for construction",
//     image: "/api/placeholder/600/400",
//     specs: "Fe 500, Diameter: 8mm to 32mm",
//     price: "₹58,000 - ₹62,000 per ton",
//     rating: 4.8,
//     totalRatings: 124,
//     popular: true,
//     stock: "In Stock",
//     discount: "10%"
//   },
//   {
//     id: "steel-rods",
//     name: "MS Round Bars",
//     description: "Mild steel round bars for various structural applications",
//     image: "/api/placeholder/600/400",
//     specs: "Diameter: 6mm to 50mm",
//     price: "₹55,000 - ₹58,000 per ton",
//     rating: 4.5,
//     totalRatings: 87,
//     popular: false,
//     stock: "Limited Stock",
//     discount: "5%"
//   },
//   {
//     id: "steel-sheets",
//     name: "HR Steel Sheets",
//     description: "Hot rolled steel sheets with excellent formability",
//     image: "/api/placeholder/600/400",
//     specs: "Thickness: 2mm to 12mm",
//     price: "₹65,000 - ₹70,000 per ton",
//     rating: 4.4,
//     totalRatings: 72,
//     popular: true,
//     stock: "In Stock",
//     discount: null
//   },
//   {
//     id: "pipes",
//     name: "MS Pipes",
//     description: "Mild steel pipes for structural and fluid transportation",
//     image: "/api/placeholder/600/400",
//     specs: "Diameter: 15mm to 150mm",
//     price: "₹60,000 - ₹65,000 per ton",
//     rating: 4.3,
//     totalRatings: 91,
//     popular: false,
//     stock: "In Stock",
//     discount: "7%"
//   },
// ];

// // Simulated filter categories
// const filterCategories = [
//   { name: "All Products", value: "all", icon: <FilterList fontSize="small" /> },
//   { name: "Popular Items", value: "popular", icon: <AutoAwesome fontSize="small" /> },
//   { name: "Discounted", value: "discounted", icon: <Star fontSize="small" /> },
//   { name: "In Stock", value: "in-stock", icon: <Check fontSize="small" /> }
// ];

// // Alert component for notifications
// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// // WhatsApp button component
// const WhatsAppButton = ({ message, showText = false }) => {
//   const encodedMessage = encodeURIComponent(message);
//   const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;
  
//   return (
//     <Tooltip title="Contact via WhatsApp" arrow placement="top">
//       <IconButton
//         component="a"
//         href={whatsappUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Contact via WhatsApp"
//         color="success"
//         size={showText ? "medium" : "small"}
//         sx={{
//           backgroundColor: alpha('#25D366', 0.15),
//           '&:hover': {
//             backgroundColor: alpha('#25D366', 0.25),
//           }
//         }}
//       >
//         <WhatsApp fontSize="small" />
//       </IconButton>
//     </Tooltip>
//   );
// };

// // Product card component
// const ProductCard = ({ product, hoveredId, setHoveredId, favorites, toggleFavorite, addToCart }) => {
//   const theme = useTheme();
//   const isFavorite = favorites.includes(product.id);
  
//   // Define stock color based on availability
//   const getStockColor = (stock) => {
//     switch(stock) {
//       case "In Stock": return "success";
//       case "Limited Stock": return "warning";
//       default: return "error";
//     }
//   };
  
//   return (
//     <MotionCard
//       elevation={hoveredId === product.id ? 8 : 3}
//       sx={{
//         position: 'relative',
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         transition: 'all 0.3s ease-in-out',
//         borderRadius: 2,
//         overflow: 'hidden',
//         borderTop: `4px solid ${theme.palette.primary.main}`,
//       }}
//       whileHover={{ y: -8 }}
//       onMouseEnter={() => setHoveredId(product.id)}
//       onMouseLeave={() => setHoveredId(null)}
//     >
//       {/* Top ribbon/badge section */}
//       <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, p: 1, zIndex: 1, display: 'flex', justifyContent: 'space-between' }}>
//         {product.popular && (
//           <Chip
//             icon={<AutoAwesome fontSize="small" />}
//             label="Popular"
//             color="primary"
//             size="small"
//             sx={{ borderRadius: 4 }}
//           />
//         )}
//         {product.discount && (
//           <Chip
//             label={`${product.discount} OFF`}
//             color="warning"
//             size="small"
//             sx={{ borderRadius: 4, ml: 'auto' }}
//           />
//         )}
//       </Box>

//       {/* Product Image with overlay */}
//       <Box sx={{ position: 'relative', pt: '56.25%' /* 16:9 Aspect Ratio */ }}>
//         <CardMedia
//           component="img"
//           image={product.image}
//           alt={product.name}
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             transition: 'transform 0.5s ease',
//             transform: hoveredId === product.id ? 'scale(1.1)' : 'scale(1)'
//           }}
//         />
        
//         {/* Overlay with quick actions */}
//         <Box
//           sx={{
//             position: 'absolute',
//             inset: 0,
//             background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
//             opacity: hoveredId === product.id ? 1 : 0,
//             transition: 'opacity 0.3s ease',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'flex-end',
//             p: 2
//           }}
//         >
//           <Typography variant="h6" color="white" fontWeight="bold">{product.name}</Typography>
//           <Typography variant="body2" color="grey.300" sx={{ mb: 2 }}>{product.specs}</Typography>
          
//           <Stack direction="row" spacing={1}>
//             <MotionIconButton
//               aria-label="Add to cart"
//               color="primary"
//               onClick={() => addToCart(product.id)}
//               size="small"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               sx={{ bgcolor: 'white' }}
//             >
//               <ShoppingCart fontSize="small" />
//             </MotionIconButton>
            
//             <MotionIconButton
//               aria-label="Toggle favorite"
//               color={isFavorite ? "error" : "default"}
//               onClick={() => toggleFavorite(product.id)}
//               size="small"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               sx={{ bgcolor: 'white' }}
//             >
//               {isFavorite ? <Favorite fontSize="small" /> : <FavoriteBorder fontSize="small" />}
//             </MotionIconButton>
            
//             <WhatsAppButton
//               message={`Hi, I'm interested in ${product.name} from Shri Durga Steel.`}
//             />
//           </Stack>
//         </Box>
//       </Box>

//       {/* Product details */}
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
//           <Typography variant="h6" color="primary.dark" gutterBottom>
//             {product.name}
//           </Typography>
//           <Chip 
//             label={product.stock}
//             color={getStockColor(product.stock)}
//             size="small"
//             sx={{ borderRadius: 1 }}
//           />
//         </Box>

//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//           <Rating 
//             value={product.rating} 
//             precision={0.5} 
//             size="small" 
//             readOnly 
//           />
//           <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
//             ({product.totalRatings})
//           </Typography>
//         </Box>

//         <Typography variant="body2" color="text.secondary" sx={{ mb: 2, height: 40, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
//           {product.description}
//         </Typography>
        
//         <Chip
//           label={`Specs: ${product.specs}`}
//           variant="outlined"
//           color="primary"
//           size="small"
//           sx={{ width: '100%', justifyContent: 'flex-start', height: 'auto', py: 0.5, mb: 2 }}
//         />
        
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
//           <Typography variant="subtitle1" fontWeight="bold" color="primary.dark">
//             {product.price}
//           </Typography>
//           <WhatsAppButton
//             message={`Hi, I'm interested in ${product.name} from Shri Durga Steel.`}
//           />
//         </Box>
//       </CardContent>

//       <Divider sx={{ my: 0 }} />

//       <CardActions sx={{ flexDirection: 'column', p: 2, gap: 1 }}>
//         <MotionButton
//           variant="contained"
//           color="primary"
//           fullWidth
//           startIcon={<ShoppingCart />}
//           onClick={() => addToCart(product.id)}
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//         >
//           Add to Cart
//         </MotionButton>
        
//         <Button
//           component={Link}
//           href={`/products/${product.id}`}
//           variant="outlined"
//           color="primary"
//           fullWidth
//           endIcon={<ArrowForward />}
//           sx={{ textDecoration: 'none' }}
//         >
//           View Details
//         </Button>
//       </CardActions>
//     </MotionCard>
//   );
// };

// export default function ProductShowcase() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [hoveredId, setHoveredId] = useState(null);
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [favorites, setFavorites] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: '',
//     severity: 'success'
//   });
//   const sectionRef = useRef(null);
  
//   // Close snackbar handler
//   const handleCloseSnackbar = () => {
//     setSnackbar({...snackbar, open: false});
//   };
  
//   // Filter products based on active filter
//   const filteredProducts = products.filter(product => {
//     if (activeFilter === "all") return true;
//     if (activeFilter === "popular") return product.popular;
//     if (activeFilter === "discounted") return product.discount;
//     if (activeFilter === "in-stock") return product.stock === "In Stock";
//     return true;
//   });
  
//   // Handle adding product to cart
//   const addToCart = (productId) => {
//     if (!cart.includes(productId)) {
//       setCart([...cart, productId]);
//       setSnackbar({
//         open: true,
//         message: 'Product added to cart!',
//         severity: 'success'
//       });
//     }
//   };
  
//   // Handle toggle favorite
//   const toggleFavorite = (productId) => {
//     if (favorites.includes(productId)) {
//       setFavorites(favorites.filter(id => id !== productId));
//       setSnackbar({
//         open: true,
//         message: 'Removed from favorites',
//         severity: 'info'
//       });
//     } else {
//       setFavorites([...favorites, productId]);
//       setSnackbar({
//         open: true,
//         message: 'Added to favorites!',
//         severity: 'success'
//       });
//     }
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };
  
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };

//   return (
//     <Box component="section" id="products" sx={{ 
//       py: 8, 
//       background: theme.palette.mode === 'light' 
//         ? `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.1)}, ${alpha(theme.palette.primary.main, 0.05)})`
//         : `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.2)}, ${alpha(theme.palette.primary.main, 0.05)})`
//     }}>
//       <Container maxWidth="xl">
//         {/* Section header */}
//         <MotionBox
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           sx={{ textAlign: 'center', mb: 6 }}
//         >
//           <Box sx={{ display: 'inline-block', position: 'relative', mb: 2 }}>
//             <Typography
//               variant="h3"
//               component="h2"
//               color="primary.dark"
//               fontWeight="bold"
//               sx={{ position: 'relative', zIndex: 1 }}
//             >
//               Our Featured Products
//             </Typography>
//             <Box
//               sx={{
//                 position: 'absolute',
//                 bottom: -6,
//                 left: 0,
//                 right: 0,
//                 height: 10,
//                 bgcolor: theme.palette.mode === 'light' ? 'primary.light' : 'primary.dark',
//                 borderRadius: 4,
//                 transform: 'rotate(-1deg)',
//                 opacity: 0.7,
//                 zIndex: 0
//               }}
//             />
//           </Box>
//           <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
//             We offer a wide range of high-quality steel products to meet all your construction and industrial needs.
//           </Typography>
//         </MotionBox>

//         {/* Filter tabs */}
//         <Stack 
//           direction="row" 
//           spacing={1} 
//           justifyContent="center"
//           flexWrap="wrap"
//           sx={{ mb: 5, px: { xs: 1, md: 0 }, gap: 1 }}
//         >
//           {filterCategories.map((category) => (
//             <MotionButton
//               key={category.value}
//               variant={activeFilter === category.value ? "contained" : "outlined"}
//               color="primary"
//               size={isMobile ? "small" : "medium"}
//               startIcon={category.icon}
//               onClick={() => setActiveFilter(category.value)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               sx={{ 
//                 borderRadius: 6,
//                 px: 2,
//                 mb: { xs: 1, md: 0 }
//               }}
//             >
//               {category.name}
//             </MotionButton>
//           ))}
//         </Stack>

//         {/* Products grid */}
//         <MotionContainer
//           ref={sectionRef}
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <Grid container spacing={3}>
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product) => (
//                 <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//                   <MotionBox
//                     variants={itemVariants}
//                     sx={{ height: '100%' }}
//                   >
//                     <ProductCard
//                       product={product}
//                       hoveredId={hoveredId}
//                       setHoveredId={setHoveredId}
//                       favorites={favorites}
//                       toggleFavorite={toggleFavorite}
//                       addToCart={addToCart}
//                     />
//                   </MotionBox>
//                 </Grid>
//               ))
//             ) : (
//               <Grid item xs={12}>
//                 <Paper elevation={0} sx={{ p: 5, textAlign: 'center', bgcolor: 'transparent' }}>
//                   <Typography variant="h6" color="text.secondary">
//                     No products found for the selected filter.
//                   </Typography>
//                 </Paper>
//               </Grid>
//             )}
//           </Grid>
//         </MotionContainer>

//         {/* Quick contact section */}
//         <MotionBox
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           sx={{ mt: 8 }}
//         >
//           <Paper 
//             elevation={3} 
//             sx={{ 
//               borderRadius: 4, 
//               overflow: 'hidden',
//               bgcolor: theme.palette.mode === 'light' ? alpha(theme.palette.primary.light, 0.1) : alpha(theme.palette.primary.dark, 0.2)
//             }}
//           >
//             <Box sx={{ p: 3 }}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
//                     <IconButton
//                       sx={{
//                         bgcolor: theme.palette.mode === 'light' ? alpha(theme.palette.primary.main, 0.1) : alpha(theme.palette.primary.main, 0.2),
//                         p: 2,
//                         mb: 2
//                       }}
//                     >
//                       <Phone color="primary" />
//                     </IconButton>
//                     <Typography variant="h6" fontWeight="bold" color="primary.dark">Call Us</Typography>
//                     <Typography variant="body1" color="text.secondary">+91 90537 19053</Typography>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
//                     <IconButton
//                       sx={{
//                         bgcolor: theme.palette.mode === 'light' ? alpha(theme.palette.primary.main, 0.1) : alpha(theme.palette.primary.main, 0.2),
//                         p: 2,
//                         mb: 2
//                       }}
//                     >
//                       <Public color="primary" />
//                     </IconButton>
//                     <Typography variant="h6" fontWeight="bold" color="primary.dark">Email Us</Typography>
//                     <Typography variant="body1" color="text.secondary">info@sridurgasteel.com</Typography>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
//                     <IconButton
//                       sx={{
//                         bgcolor: theme.palette.mode === 'light' ? alpha(theme.palette.primary.main, 0.1) : alpha(theme.palette.primary.main, 0.2),
//                         p: 2,
//                         mb: 2
//                       }}
//                     >
//                       <LocationOn color="primary" />
//                     </IconButton>
//                     <Typography variant="h6" fontWeight="bold" color="primary.dark">Visit Us</Typography>
//                     <Typography variant="body1" color="text.secondary">Industrial Area, Delhi</Typography>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Paper>
//         </MotionBox>

//         {/* View all products button */}
//         <MotionBox
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           sx={{ textAlign: 'center', mt: 6 }}
//         >
//           <MotionButton
//             component={Link}
//             href="/products"
//             variant="contained"
//             color="primary"
//             size="large"
//             endIcon={<ArrowForward />}
//             whileHover={{ 
//               scale: 1.05, 
//               boxShadow: '0 10px 25px -5px rgba(25, 118, 210, 0.4)'
//             }}
//             whileTap={{ scale: 0.95 }}
//             sx={{ 
//               px: 4, 
//               py: 1.5,
//               borderRadius: 2,
//               boxShadow: 4
//             }}
//           >
//             View All Products
//           </MotionButton>
//         </MotionBox>

//         {/* Cart status indicator */}
//         {cart.length > 0 && (
//           <Box
//             component={motion.div}
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 100, opacity: 0 }}
//             sx={{
//               position: 'fixed',
//               bottom: 24,
//               right: 24,
//               bgcolor: 'primary.dark',
//               color: 'white',
//               borderRadius: 8,
//               boxShadow: 8,
//               zIndex: 40,
//               p: 1.5
//             }}
//           >
//             <Stack direction="row" spacing={1} alignItems="center">
//               <LocalShipping />
//               <Typography variant="body2" fontWeight="medium">
//                 {cart.length} {cart.length === 1 ? 'item' : 'items'} in cart
//               </Typography>
//               <Button 
//                 variant="contained"
//                 color="primary"
//                 size="small"
//                 endIcon={<ArrowForward fontSize="small" />}
//                 sx={{ ml: 1 }}
//               >
//                 View
//               </Button>
//             </Stack>
//           </Box>
//         )}

//         {/* Snackbar notifications */}
//         <Snackbar 
//           open={snackbar.open} 
//           autoHideDuration={3000} 
//           onClose={handleCloseSnackbar}
//           anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//         >
//           <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
//             {snackbar.message}
//           </Alert>
//         </Snackbar>
//       </Container>
//     </Box>
//   );
// }


"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  CheckCircle, 
  ShieldCheck, 
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  Info,
  BrainCircuit,
  Calculator
} from "lucide-react"

const productCatalog = [
  {
    id: 1,
    name: "MS Pipe ",
    brand: "TATA Tiscon",
    sizes: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "32mm"],
    price: "₹70,500 per ton",
    image: "https://res.cloudinary.com/dds6yoff3/image/upload/v1752656212/MS_Pipe_Steel_grbamx.jpg",
    rating: 4.9,
    stock: "In Stock",
    description: "Premium quality MS Pipe with superior strength and ductility for earthquake-resistant construction.",
    features: ["High Yield Strength", "Superior Weldability", "Better Corrosion Resistance", "Excellent Bendability"],
    bestFor: ["High-Rise Buildings", "Bridges", "Dams", "Industrial Structures"]
  },
  {
    id: 2,
    name: "MS Sheet",
    brand: "JSW Neosteel",
    sizes: ["10mm", "12mm", "16mm", "20mm", "25mm", "32mm"],
    price: "₹72,800 per ton",
    image: "https://res.cloudinary.com/dds6yoff3/image/upload/v1752656213/MS_Sheet_Steel_q3h1b9.jpg",
    rating: 4.8,
    stock: "In Stock",
    description: "High-performance MS sheet  for structures requiring exceptional strength and durability.",
    features: ["Higher Tensile Strength", "Better Fire Resistance", "Improved Ductility", "High Fatigue Strength"],
    bestFor: ["Skyscrapers", "Heavy Infrastructure", "Flyovers", "Earthquake-Prone Areas"]
  },
  {
    id: 3,
    name: "CRS TMT Bars",
    brand: "SAIL",
    sizes: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm"],
    price: "₹75,200 per ton",
    image: "https://res.cloudinary.com/dds6yoff3/image/upload/v1752658074/MS_pipe_3_sjfzff.jpg",
    rating: 4.9,
    stock: "Limited Stock",
    description: "Corrosion Resistant Steel TMT Bars designed specifically for coastal and high-humidity regions.",
    features: ["Superior Corrosion Resistance", "Extended Lifespan", "Low Maintenance", "High Strength"],
    bestFor: ["Coastal Constructions", "Chemical Plants", "Sewage Treatment Plants", "Marine Structures"]
  }
];

const productFeatures = [
  {
    title: "Superior Strength & Flexibility",
    description: "Our TMT bars offer excellent tensile strength and ductility for safer structures.",
    icon: <CheckCircle className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Advanced Corrosion Resistance",
    description: "Enhanced protection against environmental factors for longer-lasting construction.",
    icon: <ShieldCheck className="h-5 w-5" />,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "ISI & ISO Certified",
    description: "All our products meet and exceed Indian and international quality standards.",
    icon: <Award className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-600"
  }
]

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showProductDetail, setShowProductDetail] = useState(false)
  const [showAIRecommendation, setShowAIRecommendation] = useState(false)
  const [recommendedProduct, setRecommendedProduct] = useState(null)

  const viewProductDetail = (product) => {
    setSelectedProduct(product)
    setShowProductDetail(true)
  }

  const AIRecommendationEngine = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
      projectType: "residential",
      location: "",
      budget: "medium",
      floorCount: "",
      specialRequirements: ""
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      setLoading(true)
      
      setTimeout(() => {
        let recommendedProductId = 1
        
        if (formData.projectType === "commercial" || formData.floorCount > 5) {
          recommendedProductId = 2
        }
        
        if (formData.location === "coastal" || formData.specialRequirements.toLowerCase().includes("corrosion")) {
          recommendedProductId = 3
        }
        
        const product = productCatalog.find(p => p.id === recommendedProductId)
        setRecommendedProduct(product)
        setLoading(false)
      }, 1500)
    }

    return (
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <BrainCircuit className="h-6 w-6 text-blue-600" />
          <h4 className="font-semibold text-gray-800">AI Product Recommendation</h4>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Project Type</label>
              <select 
                name="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              >
                <option value="residential">Residential Building</option>
                <option value="commercial">Commercial Building</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="industrial">Industrial Structure</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Location Type</label>
              <select 
                name="location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              >
                <option value="">Select Location</option>
                <option value="urban">Urban Area</option>
                <option value="coastal">Coastal Area</option>
                <option value="seismic">Earthquake Zone</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Budget Level</label>
              <select 
                name="budget"
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              >
                <option value="low">Economy</option>
                <option value="medium">Standard</option>
                <option value="high">Premium</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Number of Floors</label>
              <input 
                type="number"
                name="floorCount"
                value={formData.floorCount}
                onChange={(e) => setFormData({...formData, floorCount: e.target.value})}
                placeholder="e.g. 4"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Special Requirements</label>
            <input 
              type="text"
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={(e) => setFormData({...formData, specialRequirements: e.target.value})}
              placeholder="e.g. corrosion resistance"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            />
          </div>
          
          <button 
            type="submit"
            disabled={loading} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center w-full"
          >
            {loading ? (
              <>
                <span className="animate-spin mr-2">↻</span>
                Analyzing...
              </>
            ) : (
              <>
                <BrainCircuit className="h-4 w-4 mr-2" />
                Get Recommendation
              </>
            )}
          </button>
        </form>
      </div>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Premium Steel Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality steel products for all your construction needs
          </p>
        </div>

        {/* AI Recommendation Toggle */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => setShowAIRecommendation(!showAIRecommendation)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center"
          >
            <BrainCircuit className="h-5 w-5 mr-2" />
            {showAIRecommendation ? "Hide AI Assistant" : "Get AI Recommendation"}
          </button>
        </div>

        {showAIRecommendation && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <AIRecommendationEngine />
          </motion.div>
        )}

        {recommendedProduct && (
          <div className="bg-white p-6 rounded-xl shadow-lg mb-12 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Star className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Recommended For You</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="bg-gray-100 p-4 rounded-lg flex justify-center">
                <img src={recommendedProduct.image} alt={recommendedProduct.name} className="h-40 object-contain" />
              </div>
              
              <div className="md:col-span-2">
                <h4 className="text-lg font-bold text-gray-800">{recommendedProduct.name}</h4>
                <p className="text-gray-600 text-sm mb-2">Brand: {recommendedProduct.brand}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(recommendedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />
                    ))}
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${recommendedProduct.stock === "In Stock" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                    {recommendedProduct.stock}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{recommendedProduct.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => viewProductDetail(recommendedProduct)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-all"
                  >
                    View Details
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 text-sm font-medium py-2 px-4 rounded transition-all">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {productCatalog.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="bg-gray-100 p-4 flex justify-center h-48">
                <img src={product.image} alt={product.name} className="h-full object-contain" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                    {product.brand}
                  </span>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />
                    ))}
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${product.stock === "In Stock" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                    {product.stock}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{product.description.substring(0, 100)}...</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-700 font-medium mb-1">Available Sizes:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.map((size, idx) => (
                      <span key={idx} className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="font-bold text-blue-600">{product.price}</p>
                  <button 
                    onClick={() => viewProductDetail(product)}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-all"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Features */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Why Our Steel Stands Out</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className={`${feature.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {showProductDetail && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold text-gray-800">Product Details</h3>
              <button 
                onClick={() => setShowProductDetail(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-100 rounded-lg p-4 flex justify-center h-64">
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full object-contain" />
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />
                      ))}
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${selectedProduct.stock === "In Stock" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                      {selectedProduct.stock}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">
                    Brand: <span className="font-semibold">{selectedProduct.brand}</span>
                  </p>
                  <p className="font-bold text-xl mb-4 text-blue-600">
                    {selectedProduct.price}
                  </p>
                  
                  <p className="text-gray-700 mb-6">
                    {selectedProduct.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 text-gray-800">Key Features:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 text-gray-800">Best For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.bestFor.map((use, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700 border border-blue-100"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex-1"
                    >
                      Request Quote
                    </button>
                    
                    <button
                      onClick={() => setShowProductDetail(false)}
                      className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-medium py-2 px-6 rounded-lg transition-all flex-1"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                  <Info className="h-5 w-5 text-blue-600" />
                  <p className="text-sm text-gray-700">
                    Need help choosing? Call us at +91 87082 75179 for expert advice.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
export const imports = {
  'src/__documentation__/1-Hello.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-documentation-1-hello" */ 'src/__documentation__/1-Hello.mdx'),
  'src/__documentation__/Gallery.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-documentation-gallery" */ 'src/__documentation__/Gallery.mdx'),
  'src/__documentation__/Product.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-documentation-product" */ 'src/__documentation__/Product.mdx'),
}

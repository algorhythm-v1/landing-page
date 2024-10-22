/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/landing-page",
  output: "export",  
  reactStrictMode: true,
}

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'algorhythm-public-assets.s3.amazonaws.com'
//         },
//       ],
//     },
//   }

module.exports = nextConfig;
  
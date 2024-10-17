/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.rawgit.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          port: '',
          pathname: '/**',
        },{
          protocol:'https',
          hostname:'img.freepik.com',
          port:'',
          pathname:'/**'
        }
      ]
      
      },
};

export default nextConfig;

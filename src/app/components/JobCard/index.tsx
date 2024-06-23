export default function JobCard() {
  return (
    <div className='bg-white p-4 rounded-lg shadow-sm'>
      <div className='flex grow gap-4'>
        <div className='content-center'>
          <img
            src='https://seeklogo.com/images/K/kubernetes-logo-3A67038EAB-seeklogo.com.png'
            className='size-12'
            alt='company-icon'
          />
        </div>
        <div className='sm:flex grow'>
          <div className='grow'>
            <div className='text-gray-500 text-sm'>Kubernetes</div>
            <div className='font-bold text-md mb-1'>DevOps</div>
            <div className='text-gray-400 text-sm'>
              Remote &middot; New York, US &middot; Full-time
            </div>
          </div>
          <div className='text-gray-500 text-sm content-end'>3 days ago</div>
        </div>
      </div>
    </div>
  );
}

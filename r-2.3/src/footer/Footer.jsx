import './footer.css'
function Footer() {
  return (
    <div className="d-flex bg-black justify-content-evenly flex-wrap">
        <div className="mt-5 mb-5 foot ">
            <li className="list-group-item mt-2 text-white">Product</li>
            <li className="list-group-item mt-2 text-secondary">Platform</li>
            <li className="list-group-item mt-2 text-secondary">Designer</li>
            <li className="list-group-item mt-2 text-secondary">Interactions</li>
            <li className="list-group-item mt-2 text-secondary">security</li>
        </div>
        <div className="mt-5 mb-5 foot">
            <li className="list-group-item mt-2 text-white">Solutions</li>
            <li className="list-group-item mt-2 text-secondary">Enterprise</li>
            <li className="list-group-item mt-2 text-secondary">Startups</li>
            <li className="list-group-item mt-2 text-secondary">Global alliances</li>
            <li className="list-group-item mt-2 text-secondary">Agencies</li>
            <li className="list-group-item mt-2 text-secondary">Freelancers</li>
        </div>
        <div className="mt-5 mb-5 foot">
            <li className="list-group-item mt-2 text-white"> Company</li>
            <li className="list-group-item mt-2 text-secondary">About</li>
            <li className="list-group-item mt-2 text-secondary">Careers</li>
            <li className="list-group-item mt-2 text-secondary">We're Hiring</li>
            <li className="list-group-item mt-2 text-secondary">Terms of Service</li>
            <li className="list-group-item mt-2 text-secondary">Cookie preferences</li>
        </div>
        <div className="mt-5 mb-5 foot">
            <li className="list-group-item mt-2 text-white"> Community</li>
            <li className="list-group-item mt-2 text-secondary">Discover the community</li>
            <li className="list-group-item mt-2 text-secondary">Partner with Webflow</li>
            <li className="list-group-item mt-2 text-secondary">Certified Partners</li>
            <li className="list-group-item mt-2 text-secondary">Become a template designer</li>
            <li className="list-group-item mt-2 text-secondary">Become an affiliate</li>
        </div>
    </div>
  )
}

export default Footer
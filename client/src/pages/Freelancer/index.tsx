import { FreelancerInfoCard } from '../../components';

function Freelancer() {
  const freelancer = {
    name: 'Lottie Lynch',
    major: 'Senior UI/UX designer',
    image: null,
    portfolio: 'portfolio',
    brief: `Lottie is graduated
            from Hardvard dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.`,
  };

  return (
    <div>
      <FreelancerInfoCard initialValues={freelancer} />
    </div>
  );
}

export default Freelancer;

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return (
    <section className={`px-6 py-20 lg:px-12 lg:py-40 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export default SectionContainer;

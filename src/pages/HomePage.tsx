
import { AboutUsSection, HeroSection } from "../components/organisms";
import BenifitsSection from "../components/organisms/BenifitsSection";
import { Layout } from "../components/templates/Layout/Layout";

export const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <AboutUsSection />
            <BenifitsSection />
        </Layout>

    );
};



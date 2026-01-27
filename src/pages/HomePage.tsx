
import { AboutUsSection, BenifitsSection, HeroSection, NeighborhoodsSection } from "../components/organisms";
import { Layout } from "../components/templates/Layout/Layout";

export const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <AboutUsSection />
            <BenifitsSection />
            <NeighborhoodsSection />
        </Layout>

    );
};



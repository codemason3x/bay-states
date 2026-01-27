
import { AboutUsSection, BenifitsSection, ClientReviews, ContactSection, FeaturesSection, GroupSection, HeroSection, InstagramSection, NeighborhoodsSection } from "../components/organisms";
import { Layout } from "../components/templates/Layout/Layout";

export const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <AboutUsSection />
            <BenifitsSection />
            <NeighborhoodsSection />
            <FeaturesSection />
            <InstagramSection />
            <ClientReviews />
            <ContactSection />
            <GroupSection />
        </Layout>
    );
};



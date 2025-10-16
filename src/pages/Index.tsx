import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Добро пожаловать!</h1>
          <p className="text-xl text-gray-600">в Школу № 2 с кадетскими классами</p>
        </div>
      </main>
    </div>
  );
};

export default Index;
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/6e9c45cf-490a-4c7d-9645-084641716e81.jpg" 
                alt="Логотип школы"
                className="h-16 w-16 object-contain"
              />
              <div className="flex flex-col">
                <p className="text-xs text-gray-500 leading-relaxed max-w-md">
                  Муниципальное автономное общеобразовательное
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  учреждение "Школа № 2 с кадетскими классами"
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-right">
              <p className="text-sm text-gray-600">г. Губаха, ул. Парковая, 10А</p>
              <p className="text-sm text-gray-600">+7 (34-248) 3-13-73</p>
              <p className="text-sm text-primary">sh2.gubaha@mail.ru</p>
            </div>
            
            <div className="flex gap-3">
              <button 
                className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                aria-label="Версия для слабовидящих"
              >
                <Icon name="Eye" size={20} className="text-gray-600" />
              </button>
              <button 
                className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                aria-label="Поиск"
              >
                <Icon name="Search" size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <nav className="border-t border-gray-100">
          <ul className="flex items-center justify-center gap-12 py-4">
            <li>
              <a 
                href="#" 
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                ШКОЛА
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                ПРИЁМ НА ОБУЧЕНИЕ
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                ГИА
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                ДОПОЛНИТЕЛЬНО
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

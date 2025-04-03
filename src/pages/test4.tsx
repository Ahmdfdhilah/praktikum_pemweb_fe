import React, { useState, useEffect, useRef, Component } from 'react';
import { LifeBuoy, RefreshCw, Trash2, Clock, GitCompare, ExternalLink, AlertTriangle, ArrowRight, Check } from 'lucide-react';

// Code example component (reused from your previous component)
interface CodeExampleProps {
  title: string;
  description: string;
  code: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ title, description, code }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// Demo components for lifecycle examples
class ClassLifecycleDemo extends Component<{}, { count: number; showChild: boolean }> {
  intervalId: number | null = null;
  
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
      showChild: true
    };
  }

  componentDidMount() {
    console.log('Parent component mounted');
    this.intervalId = window.setInterval(() => {
      this.setState(prev => ({ count: prev.count + 1 }));
    }, 2000);
  }

  componentDidUpdate(prevProps: {}, prevState: { count: number; showChild: boolean }) {
    console.log('Parent component updated', prevProps);
    if (prevState.count !== this.state.count) {
      console.log(`Count updated from ${prevState.count} to ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log('Parent component will unmount');
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  toggleChild = () => {
    this.setState(prev => ({ showChild: !prev.showChild }));
  };

  render() {
    return (
      <div className="border border-blue-300 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-medium mb-2">Class Component Lifecycle Demo</h3>
        <p className="mb-2">Count: {this.state.count}</p>
        <div className="flex gap-2 mb-4">
          <button 
            onClick={this.toggleChild}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            {this.state.showChild ? 'Unmount Child' : 'Mount Child'}
          </button>
        </div>
        {this.state.showChild && <ChildComponent parentCount={this.state.count} />}
        <div className="mt-2 text-sm text-gray-500">Check console for lifecycle logs</div>
      </div>
    );
  }
}

class ChildComponent extends Component<{ parentCount: number }> {
  componentDidMount() {
    console.log('Child component mounted');
  }

  componentDidUpdate(prevProps: { parentCount: number }) {
    console.log('Child component updated');
    if (prevProps.parentCount !== this.props.parentCount) {
      console.log(`Child received new prop: ${this.props.parentCount}`);
    }
  }

  componentWillUnmount() {
    console.log('Child component will unmount');
  }

  render() {
    return (
      <div className="border border-green-300 p-3 rounded-lg bg-green-50">
        <p>Child Component (Props from Parent: {this.props.parentCount})</p>
      </div>
    );
  }
}

// Functional Component with Hooks Demo
const HooksLifecycleDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [showChild, setShowChild] = useState(true);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    console.log('Functional component "mounted" (useEffect with empty deps)');
    intervalRef.current = window.setInterval(() => {
      setCount(c => c + 1);
    }, 2000);

    return () => {
      console.log('Functional component "unmounted" (useEffect cleanup)');
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (count > 0) { // Skip initial render
      console.log(`Count updated to ${count} (useEffect with count dependency)`);
    }
  }, [count]);

  const toggleChild = () => {
    setShowChild(prev => !prev);
  };

  return (
    <div className="border border-purple-300 p-4 rounded-lg">
      <h3 className="text-lg font-medium mb-2">Functional Component with Hooks Demo</h3>
      <p className="mb-2">Count: {count}</p>
      <div className="flex gap-2 mb-4">
        <button 
          onClick={toggleChild}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
          {showChild ? 'Unmount Child' : 'Mount Child'}
        </button>
      </div>
      {showChild && <FunctionalChild parentCount={count} />}
      <div className="mt-2 text-sm text-gray-500">Check console for lifecycle logs</div>
    </div>
  );
};

const FunctionalChild: React.FC<{ parentCount: number }> = ({ parentCount }) => {
  useEffect(() => {
    console.log('Functional child "mounted"');
    return () => {
      console.log('Functional child "unmounted"');
    };
  }, []);

  useEffect(() => {
    console.log(`Functional child received new prop: ${parentCount}`);
  }, [parentCount]);

  return (
    <div className="border border-pink-300 p-3 rounded-lg bg-pink-50">
      <p>Functional Child Component (Props from Parent: {parentCount})</p>
    </div>
  );
};

// Main Lifecycle Presentation Component
const ReactLifecyclePresentation: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Title */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            React Lifecycle & State Management
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <RefreshCw size={28} className="text-purple-500 mr-3" />
            <span>Tahapan yang dilalui komponen dari mounting, updating hingga unmounting</span>
          </div>
        </header>

        {/* Slide 2: Class Component Lifecycle */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <LifeBuoy size={28} className="text-purple-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Lifecycle pada Class Component</h2>
              <p className="text-gray-700 mb-6">
                Class component di React memiliki beberapa lifecycle method yang dipanggil pada tahap tertentu 
                dalam "kehidupan" sebuah komponen.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Clock size={20} className="text-blue-500 mr-2" />
                    Mounting
                  </h3>
                  <p className="text-gray-700 mb-3">Fase ketika komponen pertama kali dibuat dan dimasukkan ke DOM:</p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li><code className="bg-gray-200 px-1 rounded">constructor()</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">static getDerivedStateFromProps()</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">render()</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">componentDidMount()</code></li>
                  </ol>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <RefreshCw size={20} className="text-purple-500 mr-2" />
                    Updating
                  </h3>
                  <p className="text-gray-700 mb-3">Fase ketika komponen di-render ulang karena perubahan props atau state:</p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li><code className="bg-gray-200 px-1 rounded">static getDerivedStateFromProps()</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">shouldComponentUpdate()</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">render()</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">getSnapshotBeforeUpdate()</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">componentDidUpdate()</code></li>
                  </ol>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Trash2 size={20} className="text-red-500 mr-2" />
                    Unmounting
                  </h3>
                  <p className="text-gray-700 mb-3">Fase ketika komponen dihapus dari DOM:</p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li><code className="bg-gray-200 px-1 rounded">componentWillUnmount()</code></li>
                  </ol>
                  <p className="text-gray-700 mt-3">
                    Method ini penting untuk membersihkan resource seperti event listener, timer, 
                    dan subscription untuk mencegah memory leak.
                  </p>
                </div>
              </div>
              
              <CodeExample
                title="Contoh Penggunaan Lifecycle Methods"
                description="Implementasi lifecycle methods pada class component React"
                code={`import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
    console.log('1. Constructor: Inisialisasi state awal');
  }

  componentDidMount() {
    console.log('3. ComponentDidMount: Komponen telah di-mount ke DOM');
    // Ideal untuk fetch data, setup subscription, atau manipulasi DOM langsung
    this.fetchUserData();
  }

  componentDidUpdate(prevProps) {
    console.log('4. ComponentDidUpdate: Komponen telah di-update');
    // Cek jika props berubah dan perlu fetch data baru
    if (prevProps.userId !== this.props.userId) {
      this.setState({ loading: true });
      this.fetchUserData();
    }
  }

  componentWillUnmount() {
    console.log('5. ComponentWillUnmount: Komponen akan dihapus dari DOM');
    // Bersihkan subscription, timer, dll
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  fetchUserData() {
    // Contoh fetch data
    fetch(\`https://api.example.com/users/\${this.props.userId}\`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }

  render() {
    console.log('2. Render: Mengembalikan JSX untuk di-render');
    const { user, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user found</div>;

    return (
      <div className="user-profile">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
    );
  }
}`}
              />
              
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400 mt-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <AlertTriangle size={20} className="text-amber-500 mr-2" />
                  Poin Penting Lifecycle
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>constructor:</strong> Tempat inisialisasi state dan binding method</li>
                  <li><strong>componentDidMount:</strong> Ideal untuk fetch data dan interaksi dengan DOM/browser API</li>
                  <li><strong>componentDidUpdate:</strong> Gunakan untuk merespon perubahan props/state, tapi hati-hati mengubah state di sini</li>
                  <li><strong>componentWillUnmount:</strong> Penting untuk cleanup (mencegah memory leak)</li>
                  <li><strong>shouldComponentUpdate:</strong> Dapat digunakan untuk optimasi performa (mencegah render tidak perlu)</li>
                </ul>
              </div>
              
              {activeDemo === 'class' && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Demo Class Lifecycle</h3>
                  <ClassLifecycleDemo />
                </div>
              )}
              
              <button 
                onClick={() => setActiveDemo(activeDemo === 'class' ? null : 'class')}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                {activeDemo === 'class' ? 'Sembunyikan Demo' : 'Tampilkan Demo'}
              </button>
            </div>
          </div>
        </section>

        {/* Slide 3: Hooks Lifecycle */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <GitCompare size={28} className="text-purple-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Lifecycle pada Functional Component (Hooks)</h2>
              <p className="text-gray-700 mb-6">
                Functional component dengan Hooks menggunakan pendekatan yang berbeda untuk mengimplementasikan 
                logika yang sama dengan lifecycle methods pada class component.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Equivalen Lifecycle dengan Hooks</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-indigo-700">constructor & componentDidMount</h4>
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto text-sm mt-1">
                        <code>{`useEffect(() => {
  // kode yang setara dengan componentDidMount
  console.log('Komponen di-mount');
  
  // opsional: function return untuk cleanup
  return () => {
    // kode yang setara dengan componentWillUnmount
    console.log('Komponen akan di-unmount');
  };
}, []);  // array dependensi kosong`}</code>
                      </pre>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-indigo-700">componentDidUpdate</h4>
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto text-sm mt-1">
                        <code>{`useEffect(() => {
  // dijalankan ketika dependencies berubah
  console.log('count berubah:', count);
}, [count]);  // spesifik dependency`}</code>
                      </pre>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-indigo-700">componentWillUnmount</h4>
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto text-sm mt-1">
                        <code>{`useEffect(() => {
  // setup timers, subscriptions, dll
  const timer = setInterval(() => {
    console.log('Interval berjalan');
  }, 1000);
  
  // function cleanup dipanggil saat unmount
  return () => {
    clearInterval(timer);
    console.log('Timer dibersihkan saat unmount');
  };
}, []);`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-violet-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Konsep Hooks vs Lifecycle Methods</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-violet-700">Perbedaan Paradigma</h4>
                      <p className="text-gray-700 mt-1">
                        Hooks menggunakan paradigma <strong>berbasis efek</strong> (effects), bukan berbasis tahapan 
                        siklus hidup. Fokusnya pada <em>apa yang terjadi</em> dan <em>kapan terjadi</em>.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-violet-700">Manfaat Hooks</h4>
                      <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
                        <li>Kode lebih terorganisir berdasarkan fitur, bukan tahapan lifecycle</li>
                        <li>Mengurangi duplikasi kode di berbagai lifecycle methods</li>
                        <li>Memudahkan ekstraksi dan penggunaan ulang logika antar komponen</li>
                        <li>Menghindari "wrapper hell" yang sering terjadi dengan HOCs dan render props</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg border border-violet-200">
                      <h4 className="font-medium text-violet-700">Hooks Penting untuk Lifecycle</h4>
                      <dl className="mt-1 space-y-2">
                        <dt className="font-medium">useState</dt>
                        <dd className="pl-4 text-gray-700">Mengelola state lokal komponen</dd>
                        
                        <dt className="font-medium">useEffect</dt>
                        <dd className="pl-4 text-gray-700">Menangani side effects (fetch data, subscriptions, manual DOM manipulation)</dd>
                        
                        <dt className="font-medium">useLayoutEffect</dt>
                        <dd className="pl-4 text-gray-700">Mirip useEffect, tapi dijalankan sebelum browser paint</dd>
                        
                        <dt className="font-medium">useRef</dt>
                        <dd className="pl-4 text-gray-700">Referensi mutable untuk menyimpan nilai antar renders</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              
              <CodeExample
                title="Implementasi Hooks untuk Lifecycle"
                description="Contoh komponen functional yang menggunakan Hooks untuk mengimplementasikan logika lifecycle"
                code={`import React, { useState, useEffect, useRef } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const prevUserIdRef = useRef();
  
  // Effect untuk mounting dan update saat userId berubah
  useEffect(() => {
    console.log('Komponen di-mount ATAU userId berubah');
    setLoading(true);
    
    const fetchData = async () => {
      try {
        const response = await fetch(\`https://api.example.com/users/\${userId}\`);
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchData();
    
    // Cleanup function (componentWillUnmount)
    return () => {
      console.log('Cleanup: komponen unmount ATAU sebelum effect dijalankan lagi');
    };
  }, [userId]); // Array dependency - effect dijalankan saat userId berubah
  
  // Effect khusus untuk memeriksa perubahan userId (seperti componentDidUpdate)
  useEffect(() => {
    if (prevUserIdRef.current !== undefined && prevUserIdRef.current !== userId) {
      console.log(\`userId berubah dari \${prevUserIdRef.current} ke \${userId}\`);
    }
    prevUserIdRef.current = userId;
  }, [userId]);
  
  // Effect untuk logging render (tanpa dependency - dijalankan setiap render)
  useEffect(() => {
    console.log('Komponen di-render');
  });
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;
  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;`}
              />
              
              {activeDemo === 'hooks' && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Demo Hooks Lifecycle</h3>
                  <HooksLifecycleDemo />
                </div>
              )}
              
              <button 
                onClick={() => setActiveDemo(activeDemo === 'hooks' ? null : 'hooks')}
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
              >
                {activeDemo === 'hooks' ? 'Sembunyikan Demo' : 'Tampilkan Demo'}
              </button>
            </div>
          </div>
        </section>

      {/* Slide 5: Best Practices */}
      <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Check size={28} className="text-green-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Best Practices untuk Lifecycle & State Management</h2>
              <p className="text-gray-700 mb-6">
                Berikut adalah panduan dan praktik terbaik untuk mengelola lifecycle komponen dan state di React
                agar aplikasi lebih performant dan maintainable.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Lifecycle Best Practices</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Cleanup dengan benar:</strong> Selalu bersihkan subscriptions, event listeners, dan timers 
                        di componentWillUnmount atau useEffect cleanup function
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Jangan panggil setState di componentWillUnmount:</strong> Hindari update state saat komponen 
                        sedang di-unmount
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Pisahkan useEffect berdasarkan concern:</strong> Lebih baik memiliki beberapa 
                        useEffect yang terfokus daripada satu useEffect besar
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Gunakan dependencies dengan benar:</strong> Pastikan semua nilai yang digunakan dalam 
                        useEffect termasuk dalam dependency array
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Hindari side effects dalam render:</strong> Render function harus pure, tanpa side effects
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-sky-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">State Management Best Practices</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-sky-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>DRY State (Don't Repeat Yourself):</strong> Hindari duplikasi state yang sama di 
                        beberapa tempat
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-sky-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>State yang minimum:</strong> Simpan hanya state yang benar-benar diperlukan, 
                        derivasi data lain dapat dihitung saat render
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-sky-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Pilih level state yang tepat:</strong> Tentukan apakah state bersifat lokal, 
                        global, atau berbagi antar komponen tertentu
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-sky-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Imutabilitas:</strong> Selalu update state secara imutable, jangan mutasi 
                        state secara langsung
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-sky-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Batasi scope Context:</strong> Pecah Context Provider berdasarkan domain dan 
                        letakkan serendah mungkin di component tree
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">Pertimbangan Pemilihan Pendekatan</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="px-4 py-2 text-left border border-slate-300">Pendekatan</th>
                        <th className="px-4 py-2 text-left border border-slate-300">Ideal Untuk</th>
                        <th className="px-4 py-2 text-left border border-slate-300">Dampak Performa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border border-slate-300 font-medium">Local State</td>
                        <td className="px-4 py-2 border border-slate-300">
                          <ul className="list-disc list-inside text-sm">
                            <li>UI state yang terbatas di komponen</li>
                            <li>Form input sederhana</li>
                            <li>Toggle, expand/collapse, dll.</li>
                          </ul>
                        </td>
                        <td className="px-4 py-2 border border-slate-300 text-green-600">
                          Rendah (rendering terbatas pada komponen dan children)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border border-slate-300 font-medium">Context API</td>
                        <td className="px-4 py-2 border border-slate-300">
                          <ul className="list-disc list-inside text-sm">
                            <li>Theme, lokalisasi, autentikasi</li>
                            <li>State yang dipakai di berbagai komponen</li>
                            <li>Aplikasi skala kecil-menengah</li>
                          </ul>
                        </td>
                        <td className="px-4 py-2 border border-slate-300 text-yellow-600">
                          Sedang (semua consumer terupdate kecuali dioptimasi)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border border-slate-300 font-medium">Redux/Zustand</td>
                        <td className="px-4 py-2 border border-slate-300">
                          <ul className="list-disc list-inside text-sm">
                            <li>Aplikasi skala besar dengan banyak state</li>
                            <li>Kompleksitas state yang tinggi</li>
                            <li>Time travel debugging, middleware</li>
                          </ul>
                        </td>
                        <td className="px-4 py-2 border border-slate-300 text-green-600">
                          Baik (selektif update dengan selector yang baik)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Common Pitfalls */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <AlertTriangle size={28} className="text-amber-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Pitfalls & Common Issues</h2>
              <p className="text-gray-700 mb-6">
                Beberapa masalah umum terkait lifecycle dan state management yang sering dijumpai dan solusinya.
              </p>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <h3 className="text-xl font-semibold mb-3">Infinite Render Loops</h3>
                  <div className="text-gray-700 space-y-2">
                    <p>
                      <strong>Masalah:</strong> Komponen terus menerus di-render ulang tanpa henti
                    </p>
                    <p>
                      <strong>Penyebab Umum:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Update state di useEffect tanpa dependency array</li>
                      <li>Mutasi state/props di dalam render</li>
                      <li>Deklarasi object/function baru setiap render yang digunakan sebagai deps</li>
                    </ul>
                    <p>
                      <strong>Solusi:</strong>
                    </p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto text-sm mt-2">
                      <code>{`// BAD - infinite loop
useEffect(() => {
  setCount(count + 1); // Updates state on every render
});

// GOOD
useEffect(() => {
  setCount(count + 1);
}, []); // Run only once on mount

// GOOD for responding to prop changes
useEffect(() => {
  doSomething();
}, [someProp]); // Only when someProp changes`}</code>
                    </pre>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                  <h3 className="text-xl font-semibold mb-3">Memory Leaks</h3>
                  <div className="text-gray-700 space-y-2">
                    <p>
                      <strong>Masalah:</strong> Resource seperti event listeners atau subscriptions tetap aktif setelah komponen unmount
                    </p>
                    <p>
                      <strong>Penyebab Umum:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Tidak menghapus timers/intervals</li>
                      <li>Lupa unsubscribe dari events atau observables</li>
                      <li>Promise/fetch yang memanggil setState setelah unmount</li>
                    </ul>
                    <p>
                      <strong>Solusi:</strong>
                    </p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto text-sm mt-2">
                      <code>{`// BAD - potential leak
useEffect(() => {
  const timer = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  // No cleanup
}, []);

// GOOD - proper cleanup
useEffect(() => {
  const timer = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  
  return () => {
    clearInterval(timer); // Cleanup on unmount
  };
}, []);`}</code>
                    </pre>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h3 className="text-xl font-semibold mb-3">Excessive Rendering</h3>
                  <div className="text-gray-700 space-y-2">
                    <p>
                      <strong>Masalah:</strong> Komponen di-render ulang terlalu sering, memengaruhi performa
                    </p>
                    <p>
                      <strong>Penyebab Umum:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Parent re-render menyebabkan semua children re-render</li>
                      <li>Context changes memicu render semua consumers</li>
                      <li>Deklarasi function/object inline dalam JSX</li>
                    </ul>
                    <p>
                      <strong>Solusi:</strong>
                    </p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto text-sm mt-2">
                      <code>{`// BAD - new function reference every render
<Button onClick={() => handleClick(id)} />

// GOOD - stable function reference
const handleButtonClick = useCallback(() => {
  handleClick(id);
}, [id]);

<Button onClick={handleButtonClick} />

// Prevent unnecessary re-renders
const MemoChild = React.memo(ChildComponent);
<MemoChild prop1={prop1} />

// Split context by domain
<ThemeProvider>
  <AuthProvider>
    <UserDataProvider>
      <App />
    </UserDataProvider>
  </AuthProvider>
</ThemeProvider>`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Summary & Resources */}
        <section className="bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <ArrowRight size={28} className="text-purple-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Kesimpulan & Resources</h2>
              
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">Key Takeaways</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-800">
                      Class components menggunakan lifecycle methods seperti constructor, componentDidMount, 
                      componentDidUpdate, dan componentWillUnmount
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-800">
                      Functional components menggunakan Hooks (terutama useEffect) untuk meniru perilaku lifecycle
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-800">
                      Cara pengelolaan state mempengaruhi pola dan frekuensi rendering komponen
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-800">
                      Best practices: cleanup resources, gunakan dependency array dengan benar, pisahkan useEffect 
                      berdasarkan concern
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-800">
                      Optimasi seperti React.memo, useMemo, dan useCallback dapat mengurangi render yang tidak perlu
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Resources untuk Dipelajari Lebih Lanjut</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ExternalLink size={18} className="text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Dokumentasi React:</strong> <a href="https://react.dev" className="text-indigo-600 hover:underline">https://react.dev</a> - Dokumentasi resmi React terbaru dengan detail tentang Hooks dan lifecycle
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink size={18} className="text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>React Lifecycle Interactive Diagram:</strong> <a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" className="text-indigo-600 hover:underline">React Lifecycle Diagram</a> - Visualisasi interaktif tentang lifecycle methods
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink size={18} className="text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>useEffect Cheatsheet:</strong> <a href="https://overreacted.io/a-complete-guide-to-useeffect/" className="text-indigo-600 hover:underline">A Complete Guide to useEffect</a> - Panduan mendalam tentang useEffect oleh Dan Abramov
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink size={18} className="text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>State Management Guide:</strong> <a href="https://kentcdodds.com/blog/application-state-management-with-react" className="text-indigo-600 hover:underline">Application State Management</a> - Panduan memilih pendekatan state management
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReactLifecyclePresentation;
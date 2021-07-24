import Head from 'next/head';
import Image from 'next/image';
import GHeader from '../components/GHeader';
import GMainView from '../components/GMainView';
import GSidebar from '../components/GSidebar';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className="w-full h-screen overflow-hidden flex flex-col flex-grow dark:bg-dark-primary">
			<GHeader />
			<div className="flex flex-row flex-grow">
				<GSidebar />
				<GMainView />
			</div>
		</div>
	);
}
